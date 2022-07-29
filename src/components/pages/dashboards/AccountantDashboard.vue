<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import ApexChart from 'vue3-apexcharts'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { users } from '/@src/stores/usersMockData'

const { t, locale } = useI18n()
const router = useRouter()

const range = reactive({
  start: new Date(),
  end: new Date(),
})

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'MM-YYYY', // Uses 'iso' if missing
})

const columns = {
  orderNumber: {
    label: 'Ariza qabul raqami',
    // cellClass: 'is-flex-grow-0',
  },
  company: {
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

const donutChartSeries = reactive([])
const donutChartOptions = reactive({
  title: {
    text: '',
  },
  chart: {
    height: 290,
    type: 'donut',
  },
  labels: [],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 280,
          toolbar: {
            show: false,
          },
        },
        legend: {
          position: 'top',
        },
      },
    },
  ],
  legend: {
    position: 'right',
    horizontalAlign: 'center',
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
          },
          value: {
            show: true,
          },
          total: {
            show: true,
            showAlways: true,
            label: t('Total_statements'),
          },
        },
      },
    },
  },
})

const barChartOptions = reactive({
  series: [],
  chart: {
    height: 280,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    },
  },
  dataLabels: {
    enabled: true,
    // formatter: formatters.asPercent,
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758'],
    },
  },
  xaxis: {
    categories: [
      t('Jan'),
      t('Feb'),
      t('Mar'),
      t('Apr'),
      t('May'),
      t('Jun'),
      t('Jul'),
      t('Aug'),
      t('Sep'),
      t('Oct'),
      t('Nov'),
      t('Dec'),
    ],
    // position: 'top',
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      // formatter: formatters.asPercent,
    },
  },
  // colors: [themeColors.green, themeColors.secondary, themeColors.orange],
  title: {
    text: '',
    align: 'left',
  },
})

onMounted(async () => {
  setTimeout(() => {
    Object.assign(donutChartSeries, Array(5).fill(null).map((_, i) => Math.round(Math.random() * (50 - 10) + 10)))
    Object.assign(donutChartOptions.labels, donutChartSeries.map((item, index) => `Status${index}: ${item}`))
    barChartOptions.series = [{
      name: 'Inflation2',
      data: Array(12).fill(0).map((_, i) => Math.random().toFixed(2) * 1)
    }]
  }, 1000)

})

function gotoView(rowId: number) {
  console.log({ rowId });
  router.push('/app/statement/' + rowId)
}
</script>

<template>
  <div class="business-dashboard company-dashboard">
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="dashboard-card is-base-chart">
          <div class="content-box is-flex">
            <h1 class="is-size-4">{{ $t('Statement_statuses') }}</h1>
            <VDatePicker :locale="locale" class="ml-auto" v-model="range" is-range color="green" trim-weeks
              :model-config="datePickerModelConfig">
              <template v-slot="{ inputValue, inputEvents }">
                <VField addons>
                  <VControl expanded icon="feather:corner-down-right">
                    <VInput :value="inputValue.start" v-on="inputEvents.start" />
                  </VControl>
                  <VControl>
                    <VButton static>
                      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                    </VButton>
                  </VControl>
                  <VControl expanded icon="feather:corner-right-up" subcontrol>
                    <VInput :value="inputValue.end" v-on="inputEvents.end" />
                  </VControl>
                </VField>
              </template>
            </VDatePicker>
          </div>
          <div class="my-auto">
            <ApexChart id="apex-chart-18" type="donut" :height="400" :series="donutChartSeries"
              :options="donutChartOptions">
            </ApexChart>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="dashboard-card is-base-chart">
          <div class="content-box is-flex">
            <h1 class="is-size-4">{{ $t('Statement_payments') }}</h1>
            <VDatePicker :locale="locale" class="ml-auto" v-model="range" is-range color="green" trim-weeks>
              <template v-slot="{ inputValue, inputEvents }">
                <VField addons>
                  <VControl expanded icon="feather:corner-down-right">
                    <VInput :value="inputValue.start" v-on="inputEvents.start" />
                  </VControl>
                  <VControl>
                    <VButton static>
                      <i class="fas fa-angle-double-right" aria-hidden="true"></i>
                    </VButton>
                  </VControl>
                  <VControl expanded icon="feather:corner-right-up" subcontrol>
                    <VInput :value="inputValue.end" v-on="inputEvents.end" />
                  </VControl>
                </VField>
              </template>
            </VDatePicker>
          </div>
          <div class="my-auto">
            <ApexChart id="apex-chart-8" :height="400" :type="barChartOptions.chart.type"
              :series="barChartOptions.series" :options="barChartOptions">
            </ApexChart>
          </div>
        </div>
      </div>

      <div class="column is-6">
        <div class="dashboard-card is-base-chart">
          <div class="content-box is-flex">
            <h1 class="is-size-4">{{ $t('Statement_latest') }}</h1>
          </div>
          <div class="my-auto p-5">
            <VFlexTableWrapper :columns="columns" :data="users">
              <template #default="wrapperState">
                <VFlexTable rounded>
                  <!-- Custom "name" cell content -->
                  <template #body-cell="{ row, column, value, index }">
                    <template v-if="column.key === 'orderNumber'">
                      {{ '00000' + (row.id + 1) }}
                    </template>
                    <template v-else-if="column.key === 'actions'">
                      <VIconButton class="mr-2 p-4" outlined circle color="info" icon="feather:eye"
                        @click.prevent="gotoView(row.id)">
                        {{ $t('View') }}
                      </VIconButton>
                    </template>
                  </template>
                </VFlexTable>

                <!-- Table Pagination with data.page binded-->
                <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6"
                  :item-per-page="wrapperState.limit" :total-items="wrapperState.total" :max-links-displayed="5"
                  no-router />
              </template>
            </VFlexTableWrapper>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="dashboard-card is-base-chart">
          <div class="content-box is-flex">
            <h1 class="is-size-4">{{ $t('Statement_should_paid') }}</h1>
          </div>
          <div class="my-auto p-5">
            <VFlexTableWrapper :columns="columns" :data="users">
              <template #default="wrapperState">
                <VFlexTable rounded>
                  <!-- Custom "name" cell content -->
                  <template #body-cell="{ row, column, value, index }">
                    <template v-if="column.key === 'orderNumber'">
                      {{ '00000' + (row.id + 1) }}
                    </template>
                    <template v-else-if="column.key === 'actions'">
                      <VIconButton class="mr-2 p-4" outlined circle color="info" icon="feather:eye"
                        @click.prevent="gotoView(row.id)">
                        {{ $t('View') }}
                      </VIconButton>
                    </template>
                  </template>
                </VFlexTable>

                <!-- Table Pagination with data.page binded-->
                <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6"
                  :item-per-page="wrapperState.limit" :total-items="wrapperState.total" :max-links-displayed="5"
                  no-router />
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
