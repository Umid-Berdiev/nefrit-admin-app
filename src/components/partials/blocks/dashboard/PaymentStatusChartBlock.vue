<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import ApexChart from 'vue3-apexcharts'
import { useI18n } from 'vue-i18n'

import {
  fetchStatementPaymentStatistics,
} from '/@src/utils/api/statement'

const { t } = useI18n()
const thisYear = ref((new Date()).getFullYear())
const selectedYear = computed({
  get(): number {
    return thisYear.value
  },
  async set(v: number) {
    await fetchPaymentStatistics(v)
  }
})

const paymentChartOptions = reactive({
  series: [],
  chart: {
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
    formatter: (val: string) => val.toLocaleString(),
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
  tooltip: {
    y: {
      formatter: function (val: string) {
        return val.toLocaleString()
      }
    }
  }
})

onMounted(async () => {
  await fetchPaymentStatistics()
})

async function fetchPaymentStatistics(year = thisYear.value) {
  const res = await fetchStatementPaymentStatistics(year)
  Object.assign(paymentChartOptions, {
    ...paymentChartOptions,
    series: [{
      name: t('Payment_sum'),
      data: res.map(item => item.amount)
    }]
  })
}

</script>

<template>
  <div class="dashboard-card is-base-chart">
    <div class="content-box is-flex">
      <h1 class="is-size-4">{{ $t('Statement_payments') }}</h1>
      <VField class="ml-auto">
        <VControl>
          <VInput type="number" :min="thisYear - 10" :max="thisYear" v-model="selectedYear" />
        </VControl>
      </VField>
    </div>
    <div class="p-5">
      <ApexChart :type="paymentChartOptions.chart.type" :height="400" :series="paymentChartOptions.series"
        :options="paymentChartOptions" />
    </div>
  </div>
</template>
