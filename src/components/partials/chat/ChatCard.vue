<script setup lang="ts">
function updateData() {
  //
}
</script>

<template>
  <div class="animated container">
    <!-- Header -->
    <ChatHeader>
      <slot name="header"></slot>
    </ChatHeader>

    <ChatBodyWrap>
      <!-- Chat Body -->
      <ChatBody>
        <slot name="body"></slot>
      </ChatBody>

      <!-- Chat side -->
      <slot name="side"></slot>
    </ChatBodyWrap>

    <ChatMessageFieldWrapper @update:data="$emit('update:data')" />
  </div>
</template>

<style lang="scss">
/* ==========================================================================
2. Chat Wrapper
========================================================================== */

.is-chat {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 16px 6px 6px 16px;
}

.is-dark {
  .is-chat {
    border: none !important;
    background: var(--dark-sidebar-light-3) !important;

    .chat-loader {
      background: var(--dark-sidebar-light-2);
    }

    #chat-input {
      background: var(--dark-sidebar-light-2) !important;
      color: var(--primary-grey-dark-10) !important;

      &::placeholder {
        color: var(--primary-grey-dark-15) !important;
      }
    }
  }
}

@media (max-width: 767px) {
  .is-chat {
    position: absolute;
    top: 0 !important;
    left: 0;
    max-height: calc(100% - 60px) !important;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .is-chat {
    position: absolute;
    top: 0 !important;
    left: 0;
    max-height: calc(100% - 60px) !important;
  }
}
</style>
