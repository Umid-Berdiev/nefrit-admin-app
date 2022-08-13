<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { isEmpty } from 'lodash';

import { createChatMessage } from "/@src/utils/api/statement";
import { StatementChatMessageData } from '/@src/utils/interfaces';
import VButton from '../../base/button/VButton.vue';

const emits = defineEmits<{
  (e: 'update:data'): void
}>()
const route = useRoute()
const currentStatementId = (route.params?.id as string) ?? null
const textInput = ref('')
const fileInput = ref<File>()
const isMsgSending = ref(false);

async function sendMessage() {
  isMsgSending.value = true;

  if (!isEmpty(textInput.value)) {
    const message = textInput.value;
    textInput.value = '';
    const values: StatementChatMessageData = {
      application_id: Number(currentStatementId),
      message,
      file: ''
    }

    const res = await createChatMessage(values)
    emits('update:data')
  }

  isMsgSending.value = false
}

async function handleFileInput(e: Event) {
  let target = e.target as HTMLInputElement;
  let file = target.files && target.files[0];

  if (!file) {
    return
  }

  if (file.size > 5000000) {
    alert('File should be smaller than 1MB')
    return
  }

  fileInput.value = file;
  const formData = new FormData();
  formData.append('application_id', currentStatementId);
  formData.append('file', file);
  formData.append('message', textInput.value);

  const res = await createChatMessage(formData);
  emits('update:data')
}
</script>

<template>
  <div class="message-field-wrapper">
    <div class="control">
      <div class="add-file-content">
        <VButton class="is-relative m-2">
          <VueIconify icon="feather:paperclip" class="mt-2" />
          <input class="is-absolute" type="file" @change="handleFileInput">
        </VButton>
      </div>
      <input id="chat-input" class="input is-rounded" type="text" v-model="textInput" @keyup.enter="sendMessage"
        aria-label="Write a message" />
      <div class="send-message">
        <VButton :loading="isMsgSending" :disabled="isMsgSending" color="primary" raised rounded @click="sendMessage">
          {{ $t('Send') }}
        </VButton>
      </div>
    </div>

    <div class="typing-indicator">
      <img src="/images/icons/misc/typing.gif" alt="" />
    </div>
  </div>
</template>

<style lang="scss">
/* ==========================================================================
5. Compose message area
========================================================================== */

.message-field-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  padding: 0 16px;
  transition: all 0.3s; // transition-all test
  z-index: 2;

  &.side-collapsed {
    width: 100% !important;
  }

  .control {
    position: relative;
    width: 100%;

    input {
      height: 42px;
      padding-left: 70px;
    }

    .add-file-content {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 11;

      &:hover,
      &:focus {
        >div {
          .button {
            background: var(--fade-grey);

            svg {
              color: var(--primary);
            }
          }
        }
      }

      input[type=file] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        opacity: 0;

        &:hover {
          cursor: pointer;
        }
      }

      >div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        height: 42px;
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s; // transition-all test

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s; // transition-all test
        }
      }

      .dropdown-content {
        a {
          display: flex;
          align-items: center;

          svg {
            height: 18px;
            width: 18px;
            color: var(--muted-grey);
          }

          .meta {
            margin-left: 12px;

            span {
              display: block;

              &:first-child {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--muted-grey);
              }
            }
          }
        }
      }
    }

    .add-emoji {
      position: absolute;
      top: 0;
      left: 34px;
      z-index: 11;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 42px;

      &:hover,
      &:focus {
        .button {
          background: var(--fade-grey);

          svg {
            color: var(--primary);
          }
        }
      }

      .button {
        width: 28px;
        height: 28px;
        border-radius: var(--radius-rounded);
        border: none;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s; // transition-all test

        svg {
          color: var(--placeholder);
          stroke-width: 2px;
          height: 18px;
          width: 18px;
          transition: all 0.3s; // transition-all test
        }
      }
    }

    .send-message {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 11;

      .button {
        height: 36px;
        min-width: 90px;
      }
    }
  }

  .typing-indicator {
    position: absolute;
    bottom: 50px;
    left: 10px;
    width: 100px;
    height: 100px;
    z-index: 2;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s; // transition-all test

    &.is-active {
      opacity: 1;
      transform: translateY(25px);
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}

.is-dark {
  .message-field-wrapper {
    .add-file-content {
      .button {
        background: var(--primary);
        border-color: var(--primary);
      }

      .dropdown-item {
        .meta {
          span:first-child {
            color: var(--smoke-white) !important;
          }
        }
      }
    }

    .add-emoji {
      left: 38px;
    }
  }
}

@media (max-width: 767px) {
  .message-field-wrapper {
    width: 100% !important;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .message-field-wrapper {
    width: 100% !important;
  }
}
</style>
