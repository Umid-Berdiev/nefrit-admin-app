<script setup lang="ts">
import { StatementChatMessageData } from '/@src/utils/interfaces'

const props = defineProps<{
  message: StatementChatMessageData
}>()

function isImageUrl(url: string) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null
}
</script>

<template>
  <li :class="[message.is_me && 'self', !message.is_me && 'other']">
    <div class="avatar">
      <img
        v-if="message.user?.avatar"
        :src="message.user.avatar"
        draggable="false"
        alt=""
      />
    </div>

    <div v-if="message.message" class="msg">
      <div class="msg-inner">
        <p style="overflow-wrap: break-word">{{ message.message }}</p>
        <VButton v-if="message.file" icon="feather:download" :href="message.file">{{
          message.file.substring(message.file.lastIndexOf('/') + 1)
        }}</VButton>
      </div>
      <time>
        {{ $h.formatDate(message.created_at, 'DD.MM.YYYY HH:mm') }}
      </time>
    </div>
    <div v-else-if="message.file && !message.message" class="msg is-image">
      <img
        v-if="isImageUrl(message.file)"
        :src="message.file"
        alt="image message"
        :width="200"
        :height="200"
      />
      <!-- <div v-if="isImageUrl(message.file)" class="image-container">
        <figure class="image is-128x128">
          <img :src="message.file" />
        </figure>
      </div> -->
      <VButton v-else link icon="feather:download" :href="message.file">
        {{ message.file.substring(message.file.lastIndexOf('/') + 1) }}
      </VButton>
      <time>
        {{ $h.formatDate(message.created_at, 'DD.MM.YYYY HH:mm') }}
      </time>
    </div>
  </li>
</template>

<style lang="scss">
/* ==========================================================================
4. Messages globals and variations
========================================================================== */

.msg {
  min-width: 50px;
  max-width: 40%;

  &.is-image {
    .image-container {
      position: relative;
      border-radius: 3px;

      &:hover,
      &:focus {
        .image-overlay {
          opacity: 0.45;
          pointer-events: none;
        }

        .image-actions {
          opacity: 1;

          .download {
            pointer-events: all;
          }
        }
      }

      figure {
        position: relative;
        display: block;
        border-radius: 3px;
        border: 4px solid var(--white);
        z-index: 1;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: var(--primary);
        border: 4px solid var(--white);
        border-radius: 3px;
        transition: all 0.3s; // transition-all test
        z-index: 2;
      }

      .image-actions {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s; // transition-all test
        z-index: 3;

        .actions-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .action {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            border-radius: var(--radius-rounded);
            background: var(--white);
            margin: 0 6px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &:hover {
              background: var(--success);

              svg {
                color: var(--smoke-white);
              }
            }

            svg {
              height: 18px;
              width: 18px;
              color: var(--success);
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }
        }
      }
    }
  }

  &.is-link-image {
    background: #e6e5ed;
    padding: 0;
    max-width: 320px !important;

    .image {
      position: relative;

      img {
        max-width: 320px;
        border-radius: var(--radius-large) 6px 0 0;
      }

      .link-badge {
        height: 40px;
        width: 40px;
        position: absolute;
        right: 15px;
        bottom: 15px;

        img {
          position: relative;
          display: block;
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
        }
      }
    }

    .link-body {
      padding: 10px 15px;

      .link-title {
        display: block;
        font-weight: 500;
        color: var(--dark-text);
      }

      small {
        display: block;
        width: 100%;
        font-size: 0.75rem;
        color: var(--muted-grey);
        padding-top: 5px;
      }
    }

    &::after {
      display: none;
    }
  }

  &.is-link {
    background: #e6e5ed;
    padding: 10px 20px;
    max-width: 320px;
    display: block;
    position: relative;

    .icon-wrapper {
      position: absolute;
      top: calc(50% - 18px);
      left: -18px;
      width: 36px;
      height: 36px;
      min-width: 36px !important;
      max-height: 36px;
      border-radius: var(--radius-rounded);
      border: 2px solid var(--white);
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        color: var(--white);
      }
    }

    .link-meta {
      margin-left: 10px;

      span {
        color: var(--dark-text);
        font-weight: 500;
        font-size: 0.9rem;
      }

      a {
        display: block;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--primary);
      }
    }

    &::after {
      display: none;
    }
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem;
  }

  img {
    position: relative;
    display: block;
    // width: 450px;
    border-radius: 5px;
    box-shadow: 0 0 3px var(--light-grey);
    transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
    cursor: default;
    -webkit-touch-callout: none;
    user-select: none;
  }
}

// Message queries
@media screen and (max-width: 800px) {
  .msg img {
    width: 300px;
  }
}

@media screen and (max-width: 550px) {
  .msg img {
    width: 200px;
  }
}
</style>
