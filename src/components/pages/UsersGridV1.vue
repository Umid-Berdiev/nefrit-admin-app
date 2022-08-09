<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { fetchStatementVotes, fetchStatementVoteStatistics } from '/@src/utils/api/statement';
import { StatementVoteData, UserData, VoteStatisticsData } from '/@src/utils/interfaces';

const route = useRoute()
const { t, locale } = useI18n()
const currentStatementId = (route.params?.id as string) ?? null
const files = ref([]);
const isFeedbackFormModalOpen = ref(false);
const selectedAnswer = ref<string | number>();
const voteList = ref<{ user: UserData, vote: StatementVoteData, is_me: boolean }[]>();
const voteStatistics = ref<VoteStatisticsData>();

await fetchList()
await fetchStatistics()

function onGivingFeedback(val: string | number) {
  isFeedbackFormModalOpen.value = true;
  selectedAnswer.value = val
}

async function fetchList() {
  const res = await fetchStatementVotes(Number(currentStatementId))
  voteList.value = res
}

async function fetchStatistics() {
  const res = await fetchStatementVoteStatistics(Number(currentStatementId))
  voteStatistics.value = res
}

</script>

<template>
  <div class="container">
    <div class="company-header is-dark-card-bordered is-dark-bg-6">
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">{{ voteStatistics?.voted }}</span>
          <p>{{ $t('Total_voted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">{{ voteStatistics?.agree }}</span>
          <p>{{ $t('Accepted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">{{ voteStatistics?.disagre }}</span>
          <p>{{ $t('Rejected') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">{{ voteStatistics?.didnt_vote }}</span>
          <p>{{ $t('Not_voted') }}</p>
        </div>
      </div>
    </div>

    <div class="user-grid user-grid-v1">
      <TransitionGroup name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item, itemIndex in voteList" :key="itemIndex" class="column is-4">
          <div class="grid-item" :class="{ 'is-active': item.is_me }">
            <VAvatar :picture="item.user?.avatar" size="xl" />
            <h3 class="dark-inverted">{{ item.user?.firstname + ' ' + item.user?.lastname }}</h3>
            <p>{{ item.user?.department }}</p>
            <div v-if="item.is_me === true" class="is-grouped mt-5">
              <template v-if="item.vote">
                <VButton :color="item.vote.value === 1 ? 'success' : 'danger'" style="width: 80%;"
                  class="is-justify-content-center mr-3">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify"
                      :data-icon="item.vote.value === 1 ? 'feather:check' : 'feather:x'" />
                  </span>
                  <span>{{ item.vote.value === 1 ? $t('Accepted') : $t('Rejected') }}</span>
                </VButton>
                <VButton color="warning" style="width: 10%;" class="is-justify-content-center"
                  @click="onGivingFeedback(0)">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:edit-2"></i>
                  </span>
                  <!-- <span>{{ $t('Reject') }}</span> -->
                </VButton>
                <VCollapse class="mt-5" :items="[{
                  title: $t('Description'),
                  content: item.vote.description,
                },]" with-chevron />
              </template>
              <template v-else>
                <VButton color="success" style="width: 45%;" class="is-justify-content-center mr-3"
                  @click="onGivingFeedback(1)">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check" />
                  </span>
                  <span>{{ $t('Accept') }}</span>
                </VButton>
                <VButton color="danger" style="width: 45%;" class="is-justify-content-center"
                  @click="onGivingFeedback(0)">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                  </span>
                  <span>{{ $t('Reject') }}</span>
                </VButton>
              </template>
            </div>
            <template v-else>
              <div v-if="item.vote" class="is-grouped mt-5">
                <VButton class="is-fullwidth is-justify-content-center"
                  :color="item.vote.value === 1 ? 'success' : 'danger'">
                  <span class="icon">
                    <i aria-hidden="true" class="iconify"
                      :data-icon="item.vote.value === 1 ? 'feather:check' : 'feather:x'" />
                  </span>
                  <span>{{ item.vote.value === 1 ? $t('Accepted') : $t('Rejected') }}</span>
                </VButton>
                <VCollapse :items="[{
                  title: $t('Description'),
                  content: item.vote.description,
                },]" with-chevron />
              </div>
              <div v-else class="is-grouped mt-5">
                <VButton class="is-fullwidth is-justify-content-center" static>
                  <span>{{ $t('Not_voted_yet') }}</span>
                </VButton>
              </div>
            </template>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <FeedbackFormModal v-model="isFeedbackFormModalOpen" :item="voteList?.find(item => item.is_me)?.vote"
      :selected-answer="selectedAnswer" :parent-id="Number(currentStatementId)"
      @update:list="() => { fetchList(); fetchStatistics() }" />

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

.is-active {
  border-color: var(--primary) !important;
}

.collapse {
  margin-top: 1.5rem;
  margin-bottom: 0 !important;
  padding: 0 !important;

  .collapse-header {
    height: auto;
  }

  .collapse-content {
    text-align: left;
  }

  .collapse-icon {
    border: 0 !important;
    box-shadow: none !important;
  }
}
</style>
