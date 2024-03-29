<script setup lang="ts">
import { useChat } from '/@src/stores/chat'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const chat = useChat()
</script>

<template>
  <div :class="[chat.mobileConversationDetailsOpen && 'is-mobile-active']" class="chat-side">
    <div class="chat-side-header">
      <MessagingToolbar @close="chat.setMobileConversationDetailsOpen(false)" />
    </div>

    <div class="chat-side-content is-single">
      <div class="user-pic">
        <img id="user-details-image" :src="chat.selectedConversation.avatar" alt=""
          @error="(event) => onceImageErrored(event, '150x150')" />
        <img id="user-details-badge" class="is-badge" src="/images/icons/flags/united-states-of-america.svg" alt=""
          @error.once="(event) => onceImageErrored(event, '150x150')" />
      </div>
      <h4 v-if="chat.selectedConversation.name" class="user-name">
        {{ chat.selectedConversation.name }}
      </h4>
      <p v-if="chat.selectedConversation.lastMessage" class="user-job-title">
        {{ chat.selectedConversation.lastMessage }}
      </p>

      <div class="side-actions">
        <a class="button v-button is-rounded">
          <span class="icon is-small">
            <i aria-hidden="true" class="fas fa-phone"></i>
          </span>
          <span>Audio Call</span>
        </a>
        <a class="button v-button is-rounded">
          <span class="icon is-small">
            <i aria-hidden="true" class="fas fa-video"></i>
          </span>
          <span>Video Call</span>
        </a>
      </div>

      <div class="detail-photos">
        <div class="detail-photo-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-image">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <path d="M21 15l-5-5L5 21"></path>
          </svg>
          Shared photos
        </div>
        <div class="detail-photo-grid">
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
          <img src="/images/avatars/svg/vuero-3.svg" alt=""
            @error.once="(event) => onceImageErrored(event, '1600x900')" />
        </div>
        <a class="view-more">View More</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat-side {
  position: relative;
  width: 320px;
  height: 100%;
  border-left: 1px solid var(--fade-grey);
  background: var(--white);
  z-index: 3;
  transition: all 0.3s; // transition-all test

  .chat-side-header {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  .chat-side-content {
    text-align: center;
    transition: all 0.3s; // transition-all test
    padding: 20px;

    .user-pic {
      position: relative;
      max-width: 90px;
      margin: 0 auto;

      img {
        height: 90px;
        width: 90px;
        border-radius: var(--radius-rounded);
        display: block;

        &.is-squared {
          border-radius: 0 !important;
        }

        &.is-badge {
          display: block;
          position: absolute;
          right: -6px;
          bottom: 0;
          border: 3px solid var(--white);
          height: 34px;
          width: 34px;
          border-radius: var(--radius-rounded);
        }
      }
    }

    .user-name {
      margin-top: 10px;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--dark-text);
    }

    .user-job-title {
      color: var(--muted-grey);
    }

    .side-actions {
      padding: 12px 0;

      .button {
        // color: var(--light-text);

        &:hover,
        &:focus {
          box-shadow: var(--light-box-shadow);
        }
      }
    }

    .detail-photos {
      margin-top: 30px;
      text-align: center;
      padding: 0 12px;

      .detail-photo-title {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1rem;
        margin-bottom: 20px;
        // color: var(--light-text);

        svg {
          width: 16px;
          margin-right: 8px;
        }
      }

      .detail-photo-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 6px;
        grid-row-gap: 6px;
        grid-template-rows: repeat(3, 60px);

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
          object-position: center;
        }
      }

      .view-more {
        display: block;
        color: var(--primary);
        font-weight: 600;
        font-size: 15px;
        margin: 25px 0;
      }
    }
  }
}

.is-dark {
  .chat-side {
    background: var(--dark-sidebar-light-4);
    border-color: var(--dark-sidebar-light-2);

    .user-name {
      color: var(--primary-grey);
    }

    .chat-side-content {
      .is-badge {
        border-color: var(--dark-sidebar-light-4);
      }

      .detail-photos {
        .view-more {
          color: var(--primary);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .chat-side {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transform: translateX(100%);
    transition: all 0.3s; // transition-all test
    z-index: 20;

    &.is-mobile-active {
      transform: translateX(0);
    }
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .chat-side {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 340px;
    transform: translateX(100%);
    transition: all 0.3s; // transition-all test
    z-index: 20;

    &.is-mobile-active {
      transform: translateX(0);
    }
  }
}
</style>
