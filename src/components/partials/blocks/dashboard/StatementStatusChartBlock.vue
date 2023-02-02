<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import ApexChart from 'vue3-apexcharts'
import { useI18n } from 'vue-i18n'
import { isEmpty } from 'lodash'
import moment from 'moment'

import { fetchStatementStatusStatistics } from '/@src/utils/api/statement'

const { t, locale } = useI18n()

const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

const range = computed({
  get: () => ({
    start: moment().subtract(1, 'month').format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD'),
  }),
  set: async (val: any) => {
    if (!isEmpty(val))
      await fetchStatusStatistics({
        date_start: val.start,
        date_end: val.end,
      })
  },
})

const statusChartSeries = reactive([])
const statusChartOptions = reactive({
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
    },
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
  await fetchStatusStatistics({
    date_start: range.value.start,
    date_end: range.value.end,
  })
})

async function fetchStatusStatistics(
  range: any = {
    date_start: '',
    date_end: '',
  }
) {
  const res = await fetchStatementStatusStatistics(range)
  Object.assign(
    statusChartSeries,
    res.map((item) => item.applications)
  )
  Object.assign(
    statusChartOptions.labels,
    res.map((item) => `${item.name}: ${item.applications}`)
  )
}
</script>

<template>
  <div class="dashboard-card is-base-chart">
    <div class="content-box is-flex">
      <h1 class="is-size-4">{{ $t('Statement_statuses') }}</h1>
      <VDatePicker
        v-model="range"
        :locale="locale"
        class="ml-auto"
        is-range
        color="green"
        trim-weeks
        :model-config="datePickerModelConfig"
      >
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
    <div class="p-5">
      <ApexChart
        :type="statusChartOptions.chart.type"
        :height="400"
        :series="statusChartSeries"
        :options="statusChartOptions"
      />
    </div>
  </div>
</template>
