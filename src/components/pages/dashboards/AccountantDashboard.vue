<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import {
  fetchShouldPaidStatementsStatistics
} from '/@src/utils/api/statement'

const { t } = useI18n()
const router = useRouter()

const columns2 = {
  code: {
    label: 'Ariza qabul raqami',
    // cellClass: 'is-flex-grow-0',
  },
  applicant: {
    label: t('applied_legal_entity'),
  },
  drug: {
    label: t('drug_name'),
  },
  date: {
    label: t('applied_at'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const statementData = reactive({
  pagination: {
    current_page: 1,
    per_page: 5,
    total: 5,
  },
  result: []
})

const currentPage2 = computed({
  get: () => {
    return statementData.pagination.current_page
  },
  set: async (page) => {
    await fetchShouldPaidStatements(page)
  }
})

onMounted(async () => {
  await fetchShouldPaidStatements()
})

function gotoView(rowId: number) {
  router.push('/app/statements/' + rowId)
}

async function fetchShouldPaidStatements(page: number = 1) {
  const res = await fetchShouldPaidStatementsStatistics(page)
  Object.assign(statementData, res)
}
</script>

<template>
  <div class="business-dashboard company-dashboard">
    <div class="columns is-multiline">
      <div class="column is-6">
        <StatementStatusChartBlock />
      </div>
      <div class="column is-6">
        <PaymentStatusChartBlock />
      </div>

      <div class="column is-6">
        <LatestStatementsTableBlock />
      </div>
      <div class="column is-6">
        <div class="dashboard-card is-base-chart">
          <div class="content-box is-flex">
            <h1 class="is-size-4">{{ $t('Statement_should_paid') }}</h1>
          </div>
          <div class="p-5">
            <VFlexTableWrapper :columns="columns2" :data="statementData.result"
              :limit="statementData.pagination.per_page" :total="statementData.pagination.total">
              <template #default="wrapperState">
                <VFlexTable rounded>
                  <!-- Custom "name" cell content -->
                  <template #body-cell="{ row, column, value, index }">
                    <template v-if="column.key === 'date' && value">
                      <span>{{ $h.formatDate(value, 'HH:mm DD.MM.YYYY') }}</span>
                    </template>
                    <template v-if="column.key === 'actions'">
                      <VIconButton class="p-4" outlined circle color="info" icon="feather:eye"
                        @click.prevent="gotoView(row.id)">
                        {{ $t('View') }}
                      </VIconButton>
                    </template>
                  </template>
                </VFlexTable>

                <VFlexPagination v-if="statementData.result.length" v-model:current-page="currentPage2" class="mt-6"
                  :item-per-page="statementData.pagination.per_page" :total-items="statementData.pagination.total" />
              </template>
            </VFlexTableWrapper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.company-dashboard {
  .company-header {
    display: flex;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);
    margin-bottom: 1.5rem;

    .header-item {
      width: 25%;
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

  .widget {
    height: 100%;
  }

  .dashboard-card {
    @include vuero-s-card;

    height: 100%;

    &.is-company {
      text-align: center;
      padding: 30px;

      .v-avatar {
        display: block;
        margin: 0 auto 10px;

        .button {
          position: absolute;
          bottom: 0;
          right: 0;
          max-width: 35px;
        }
      }

      >h3 {
        color: var(--dark-text);
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
      }

      >p {
        font-size: 0.9rem;
      }

      .description {
        padding: 10px 0 0;
      }

      .company-stats {
        display: flex;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid var(--fade-grey-dark-3);

        .company-stat {
          width: 33.3%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          span {
            display: block;
            font-family: var(--font);

            &:first-child {
              text-transform: uppercase;
              font-family: var(--font-alt);
              font-size: 0.75rem;
              color: var(--light-text);
            }

            &:nth-child(2) {
              color: var(--dark-text);
              font-size: 1.4rem;
              font-weight: 600;
            }
          }
        }
      }
    }

    &.is-base-chart {
      padding: 0;
      display: flex;
      flex-direction: column;

      .content-box {
        padding: 30px;

        .revenue-stats {
          display: flex;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--fade-grey-dark-3);

          .revenue-stat {
            margin-right: 30px;
            font-family: var(--font);

            span {
              display: block;

              &:first-child {
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
                color: var(--light-text);
              }

              &:nth-child(2) {
                color: var(--dark-text);
                font-size: 1.6rem;
                font-weight: 600;
              }

              &.current {
                color: var(--primary);
              }
            }
          }
        }
      }

      .chart-container {
        // margin-top: auto;
        // margin-bottom: auto;
      }
    }

    &.is-tickets {
      padding: 30px;

      .ticket-list {
        padding: 10px 0;

        .media-flex {
          +.media-flex {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid var(--fade-grey-dark-3);
          }

          .flex-meta {
            span {
              &:nth-child(2) {
                font-size: 1rem;
                margin: 4px 0;
                color: var(--light-text-dark-20);
                max-width: 430px;
              }

              &:nth-child(3) {
                font-size: 0.9rem;
                color: var(--light-text);
              }
            }
          }
        }
      }
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }
  }

  .table-wrapper {
    min-height: 0;
  }

  .dataTable-wrapper {
    .dataTable-top {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
}

.is-dark {
  .company-dashboard {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .company-dashboard {
    .company-header {
      flex-wrap: wrap;

      .header-item {
        width: 50%;
        border-right: none;
        border: none;
        padding: 16px 0;
      }
    }

    .dashboard-card {
      &.is-tickets {
        padding: 30px;

        .ticket-list {
          .media-flex {
            .flex-meta {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
