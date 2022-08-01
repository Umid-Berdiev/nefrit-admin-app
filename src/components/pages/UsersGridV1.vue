<script setup lang="ts">
import { computed, ref } from 'vue'

import { users } from '/@src/data/user-grid-v1'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users.slice(0, 5)
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.badge.match(new RegExp(filters.value, 'i'))
      )
    }).splice(0, 5)
  }
})

const files = ref([]);
const isFeedbackFormModalOpen = ref(false);
const selectedAnswer = ref<String>();

function onGivingFeedback(val: String) {
  isFeedbackFormModalOpen.value = true;
  selectedAnswer.value = val
}
</script>

<template>
  <div class="container">
    <div class="company-header is-dark-card-bordered is-dark-bg-6">
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">5</span>
          <p>{{ $t('Total_voted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">3</span>
          <p>{{ $t('Accepted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">2</span>
          <p>{{ $t('rejected') }}</p>
        </div>
      </div>
    </div>

    <div class="user-grid user-grid-v1">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results." subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria." larger>
      </VPlaceholderPage>

      <TransitionGroup name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item, itemIndex in filteredData" :key="item.id" class="column is-4">
          <div class="grid-item">
            <VAvatar :picture="item.avatar" size="xl" />
            <h3 class="dark-inverted">{{ item.fullName }}</h3>
            <p>{{ item.position }}</p>
            <!-- <div class="people">
              <VAvatar v-for="user in item.team" :key="user.id" size="small" v-bind="getAvatarData(user)" />
            </div> -->
            <div v-if="itemIndex === 4" class="is-grouped mt-5">
              <VButton color="success" style="width: 45%;" class="is-justify-content-center mr-3"
                @click="onGivingFeedback('Yes')">
                <span class="icon">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check" />
                </span>
                <span>{{ $t('Yes') }}</span>
              </VButton>
              <VButton color="danger" style="width: 45%;" class="is-justify-content-center"
                @click="onGivingFeedback('No')">
                <span class="icon">
                  <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                </span>
                <span>{{ $t('No') }}</span>
              </VButton>
            </div>
            <div v-else class="is-grouped mt-5">
              <VButton class="is-fullwidth is-justify-content-center"
                :color="itemIndex % 2 === 0 ? 'success' : 'danger'">
                <span class="icon">
                  <i aria-hidden="true" class="iconify"
                    :data-icon="itemIndex % 2 === 0 ? 'feather:check' : 'feather:x'" />
                </span>
                <span>{{ itemIndex % 2 === 0 ? $t('Yes') : $t('No') }}</span>
              </VButton>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <FeedbackFormModal v-model="isFeedbackFormModalOpen" :selected-answer="selectedAnswer" />

  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark;
    }
  }
}

.user-grid-v1 {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card;

    text-align: center;

    >.v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    // .buttons {
    //   display: flex;
    //   justify-content: space-between;

    //   .button {
    //     width: calc(50% - 4px);
    //     color: var(--light-text);

    //     &:hover,
    //     &:focus {
    //       border-color: var(--fade-grey-dark-4);
    //       color: var(--primary);
    //       box-shadow: var(--light-box-shadow);
    //     }
    //   }
    // }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .user-grid-v1 {
    .columns {
      display: flex;

      .column {
        min-width: 50% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .user-grid-v1 {
    .columns {
      .column {
        min-width: 33.3% !important;
      }
    }
  }
}

.company-header {
  display: flex;
  padding: 20px;
  background: var(--white);
  border: 1px solid var(--fade-grey-dark-3);
  border-radius: var(--radius-large);
  margin: 1.5rem 0;

  .header-item {
    width: 33.33%;
    border-right: 1px solid var(--fade-grey-dark-3);

    &:last-child {
      border-right: none;
    }

    .item-inner {
      text-align: center;

      .lnil,
      .lnir {
        font-size: 1.8rem;
        margin-bottom: 6px;
        color: var(--primary);
      }

      span {
        display: block;
        font-family: var(--font);
        font-weight: 600;
        font-size: 1.6rem;
        color: var(--dark-text);
      }

      p {
        font-family: var(--font-alt);
        font-size: 0.95rem;
      }
    }
  }
}
</style>
