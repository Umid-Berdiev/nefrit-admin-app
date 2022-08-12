<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import ApexChart from 'vue3-apexcharts'
import { useI18n } from 'vue-i18n'
import { isEmpty } from 'lodash'
import moment from 'moment'

import {
  fetchStatementStageStatistics
} from '/@src/utils/api/statement'

const { t, locale } = useI18n()

const range = computed({
  get: () => ({
    start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
  }),
  set: async (val: any) => {
    console.log({ val });

    if (!isEmpty(val)) await fetchStageStatistics({
      date_start: val.start,
      date_end: val.end
    })
  }
})

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

const stageChartSeries = reactive([])
const stageChartOptions = reactive({
  title: {
    text: '',
  },
  chart: {
    height: 200,
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
    formatter: (val, opt) => {
      return `<span style="overflow-wrap: break-word;">${val}</span>`
    }
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

onMounted(async () => {
  await fetchStageStatistics({
    date_start: range.value.start,
    date_end: range.value.end
  })
})

async function fetchStageStatistics(range: any = {
  date_start: '',
  date_end: '',
}) {
  const res = await fetchStatementStageStatistics(range)
  Object.assign(stageChartSeries, res.map(item => item.applications))
  Object.assign(stageChartOptions.labels, res.map(item => `${item.name}: ${item.applications}`))
}

</script>

<template>
  <div class="dashboard-card is-base-chart">
    <div class="content-box is-flex">
      <h1 class="is-size-4">{{ $t('Statement_stages') }}</h1>
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
    <div>
      <ApexChart :type="stageChartOptions.chart.type" :height="400" :series="stageChartSeries"
        :options="stageChartOptions" />
    </div>
  </div>
</template>
