<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  fetchStatementVotes,
  fetchStatementVoteStatistics,
} from '/@src/utils/api/statement'
import { StatementVoteData, UserData, VoteStatisticsData } from '/@src/utils/interfaces'

const route = useRoute()
const currentStatementId = (route.params?.id as string) ?? null
const isFeedbackFormModalOpen = ref(false)
const selectedAnswer = ref<string | number>()
const voteList = ref<{ user: UserData; vote: StatementVoteData; is_me: boolean }[]>()
const voteStatistics = ref<VoteStatisticsData>()

await fetchList()

function onGivingFeedback(val: string | number) {
  isFeedbackFormModalOpen.value = true
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
    <div class="user-grid user-grid-v1">
      <TransitionGroup
        name="list"
        tag="div"
        class="columns is-multiline is-justify-content-center"
      >
        <!--Grid item-->
        <template v-if="voteList?.length">
          <div v-for="(vote, voteIndex) in voteList" :key="voteIndex" class="column is-4">
            <div class="grid-item is-active">
              <VAvatar :picture="vote.user?.avatar" size="xl" />
              <h3 class="dark-inverted">
                {{ vote.user?.firstname + ' ' + vote.user?.lastname }}
              </h3>
              <p>{{ vote.user?.department }}</p>
              <div class="is-grouped mt-5">
                <template v-if="vote.vote">
                  <VButton
                    :color="vote.vote.value ? 'success' : 'danger'"
                    class="is-justify-content-center mr-3 is-fullwidth"
                  >
                    <span class="icon">
                      <i
                        aria-hidden="true"
                        class="iconify"
                        :data-icon="vote.vote.value ? 'feather:check' : 'feather:x'"
                      />
                    </span>
                    <span>{{ vote.vote.value ? $t('Accepted') : $t('Rejected') }}</span>
                  </VButton>
                  <VCollapse
                    class="mt-5"
                    :items="[
                      {
                        title: $t('Description'),
                        content: vote.vote.description,
                      },
                    ]"
                    with-chevron
                  />
                </template>
                <template v-else>
                  <VButton
                    color="success"
                    style="width: 45%"
                    class="is-justify-content-center mr-3"
                    @click="onGivingFeedback(1)"
                  >
                    <span class="icon">
                      <i aria-hidden="true" class="iconify" data-icon="feather:check" />
                    </span>
                    <span>{{ $t('Accept') }}</span>
                  </VButton>
                  <VButton
                    color="danger"
                    style="width: 45%"
                    class="is-justify-content-center"
                    @click="onGivingFeedback(0)"
                  >
                    <span class="icon">
                      <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                    </span>
                    <span>{{ $t('Reject') }}</span>
                  </VButton>
                </template>
              </div>
            </div>
          </div>
        </template>
      </TransitionGroup>
    </div>
    <FeedbackFormModal
      v-model="isFeedbackFormModalOpen"
      :selected-answer="selectedAnswer"
      :parent-id="Number(currentStatementId)"
      @update:list="
        () => {
          fetchList()
          fetchStatistics()
        }
      "
    />
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

    > .v-avatar {
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

.is-dark .collapse[open] .collapse-header .collapse-icon {
  background: unset !important;
}
</style>
