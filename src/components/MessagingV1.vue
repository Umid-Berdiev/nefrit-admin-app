<script setup lang="ts">
import { computed, onMounted, onUpdated, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { fetchStatementChatMessages } from "/@src/utils/api/statement";
import { StatementChatMessageData } from "/@src/utils/interfaces";

const { t, locale } = useI18n()
const route = useRoute()
const currentId = (route.params?.id as string) ?? null

// Those utilities are used to manage the layout
const messages: StatementChatMessageData[] = reactive([])
const chatBoxBody = ref<HTMLDivElement>();

await fetchChatMessages()

// onMounted(() => {
//   console.log('on mounted hook');
//   scrollToBottom();
// });

// onUpdated(() => {
//   console.log('on updated hook');
//   scrollToBottom();
// });

watch(
  () => messages,
  (newVal) => {
    if (newVal) scrollToBottom()
  },
  { deep: true, immediate: true }
)

async function fetchChatMessages() {
  const res = await fetchStatementChatMessages(Number(currentId))
  Object.assign(messages, res)
}

async function scrollToBottom() {
  const chatBody = document.getElementById('chat-body');
  console.log('chatBody.offsetHeight: ', chatBody?.offsetHeight);

  if (chatBody) chatBody.scrollTop = chatBody.offsetHeight + 50;
}

</script>

<template>
  <!-- Chat Card -->
  <ChatCard @update:data="fetchChatMessages">
    <template #body ref="chatBoxBody">
      <li v-if="messages.length === 0" class="no-messages">
        <div class="text">
          <h3>{{ $t('No_messages_yet') }}</h3>
        </div>
      </li>

      <ChatMsg v-for="message in messages" :key="message.id" :message="message" />
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
