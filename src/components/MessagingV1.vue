<script setup lang="ts">
import { onMounted } from 'vue'

import { useChat } from '/@src/stores/chat'
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useNotyf } from '/@src/composable/useNotyf'

/**
 * The chat store keep the chat data across the app
 * It internaly uses the useApi composable to fetch the data (to the json-server)
 */
const chat = useChat()

// Those utilities are used to manage the layout
const layoutSwitcher = useLayoutSwitcher()
const viewWrapper = useViewWrapper()
const notyf = useNotyf()

// onMounted is a composition hook that is called when the component is mounted
onMounted(async () => {

  try {
    // Ask to the store to load conversations,
    // - chat.loading will be set to true while loading
    // - chat.conversations will be populated with the loaded conversations
    await chat.loadConversations()

    // When conversations are loaded, select last unread conversation to load its messages
    const lastReadConversation = chat.conversations.find(
      (conversation) => !conversation.unreadMessages
    )

    // Note that we do not await the messages to be loaded,
    // we have nothing to do with them here but it will continue to run in background
    if (lastReadConversation) {
      chat.selectConversastion(lastReadConversation.id)
    } else {
      chat.selectConversastion(chat.conversations[0].id)
    }
  } catch (e: any) {
    // We always catch errors in the components, so we can display messages to the user
    // Here we just display the error with notyf popins
    notyf.error(e.message)
  }
})

// Click handler to display the addConversation inputs
function addConversation() {
  chat.unselectConversation()
  chat.setAddConversationOpen(!chat.addConversationOpen)
}

// Click handler to toggle the conversations
function selectConversation(id: number) {
  chat.setAddConversationOpen(false)
  chat.selectConversastion(id)
}

</script>

<template>
  <!-- Chat Card -->
  <ChatCard>
    <template #body>
      <li v-if="chat.messages.length === 0" class="no-messages">
        <!-- <img class="light-image" src="/@src/assets/illustrations/placeholders/search-4.svg" alt="" /> -->
        <!-- <img class="dark-image" src="/@src/assets/illustrations/placeholders/search-4-dark.svg" alt="" /> -->
        <div class="text">
          <h3>No messages yet</h3>
          <p>Start the conversation by typing a message</p>
        </div>
      </li>

      <ChatMsg v-for="message in chat.messages" :key="message.id" :message="message" />

      <li class="chat-loader" :class="[chat.loading && 'is-active']">
        <div class="loader is-loading"></div>
      </li>
    </template>
  </ChatCard>
</template>

<style lang="scss">
/* ==========================================================================
7. Chat Dark mode
========================================================================== */

.is-dark {
  .collapsed-messaging {
    background: var(--dark-sidebar-light-5);
    border-color: var(--dark-sidebar-light-5) !important;

    .collapsed-conversations {
      li {
        &.is-active {
          background: var(--dark-sidebar-light-2);
          border-color: var(--primary) !important;
        }

        .user-container {

          .is-badge,
          .is-count {
            border-color: var(--dark-sidebar-light-5) !important;
          }
        }
      }
    }
  }
}

/* ==========================================================================
8. Media Queries
========================================================================== */

@media (max-width: 767px) {
  .chat-content {
    padding: 0 5px !important;
  }

  .collapsed-messaging {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-content {
    padding: 0 5px !important;
  }

  .collapsed-messaging {
    display: none;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .collapsed-messaging {
    &.is-active {
      left: 60px !important;
      border-left: 1px var(--fade-grey-dark-3);
    }
  }
}
</style>
