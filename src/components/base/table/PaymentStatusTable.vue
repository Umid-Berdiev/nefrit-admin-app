<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router';
import { useNotyf } from '/@src/composable/useNotyf';

import { useMainStore } from '/@src/stores'
import { fetchContractPayments } from '/@src/utils/api/statement';
import { verifyAllPayments } from '/@src/utils/api/payment';
import { StatementContractData } from '/@src/utils/interfaces';
import VerifyPaymentModal from '../modal/VerifyPaymentModal.vue';

const { t, locale } = useI18n()
const route = useRoute()
const contractId = (route.params?.id as string) ?? null
const mainStore = useMainStore()
const notif = useNotyf()
const contractData = ref<StatementContractData>()
const selectedId = ref<number | null>(null)
const columns = {
  orderNumber: {
    format: (value, row, index) => `${index + 1}`,
    cellClass: 'is-flex-grow-0',
  },
  file: {
    label: t('Invoice'),
    grow: true
  },
  amount: {
    label: t('Amount'),
    // grow: true
  },
  status: {
    label: t('Status'),
  },
  created_at: {
    label: t('Paid_date'),
  },
  verified_at: {
    label: t('Verified_date'),
  },
  actions: {
    label: t('Actions'),
    align: 'center',
  },
} as const
const isVerifyModalOpen = ref<boolean>(false)

await fetchData()

async function fetchData() {
  const res = await fetchContractPayments(Number(contractId), locale.value)
  contractData.value = await res
}

async function onOneVerify(paymentId: number) {
  selectedId.value = paymentId
  isVerifyModalOpen.value = true
}

async function onAllVerify() {
  mainStore.$patch({ confirmModalState: true, confirmModalOkButtonColor: 'primary' })
}

async function onReject(paymentId: number) {
  selectedId.value = paymentId
  mainStore.$patch({ confirmModalState: true })
}

async function handleVerifyAction() {
  await verifyAllPayments(contractId)
  await fetchData()
}

function notify() {
  notif.success(t('Updated_successfully'))
}
</script>

<template>
  <div class="applicant-list-wrapper">
    <VFlex class="mb-4" flex-wrap="wrap">
      <VFlexItem>
        <h1 class="is-size-3 mb-3">{{ $t('Payments') }}</h1>
      </VFlexItem>
      <VFlexItem class="ml-auto">
        <VButton type="button" v-if="!contractData?.verified_at" rounded color="primary" icon="feather:check"
          @click="onAllVerify">
          {{ $t('Verify_all') }}
        </VButton>
      </VFlexItem>
    </VFlex>
    <VFlexTableWrapper :columns="columns" :data="contractData.payments">
      <!--
        Here we retrieve the internal wrapperState.
        Note that we can not destructure it
      -->
      <template #default="wrapperState">
        <VFlexTable rounded>
          <!-- header-column slot -->
          <template #header-column="{ column }">
            <span v-if="column.key === 'orderNumber'" class="is-flex-grow-0" v-text="'#'" />
          </template>

          <!-- Custom "name" cell content -->
          <template #body-cell="{ row, column, value }">
            <!-- <VCheckbox v-if="column.key === 'select'" v-model="selectedRowsId" :value="row.id" name="selection"
              @change="clickOnRow" /> -->

            <template v-if="column.key === 'file'">
              <a :href="row.file" class="has-text-primary is-pushed-mobile">
                <span class="mr-3">{{ $t('Download') }}</span>
                <VueIconify icon="feather:link" />
              </a>
            </template>
            <template v-if="column.key === 'amount'">
              {{ Number(value).toLocaleString() }}
            </template>
            <template v-if="column.key === 'status' && value">
              <StatusTag :status="value" />
            </template>
            <template v-if="column.key === 'created_at' && value">
              {{ $h.formatDate(value, 'DD.MM.YYYY HH:mm') }}
            </template>
            <template v-if="column.key === 'verified_at' && value">
              {{ $h.formatDate(value, 'DD.MM.YYYY HH:mm') }}
            </template>
            <template v-if="column.key === 'actions'">
              <VButtons v-if="row.status?.color === 'warning'">
                <VButton class="is-primary is-outlined px-3" @click="onOneVerify(row.id)">{{
                    $t('Verify')
                }}</VButton>
                <VButton class="is-danger is-outlined px-3" @click="onReject">{{ $t('Cancel') }}</VButton>
              </VButtons>
            </template>
          </template>
        </VFlexTable>
        <VFlexPagination v-model:current-page="wrapperState.page" class="mt-6" :item-per-page="wrapperState.limit"
          :total-items="wrapperState.total" :max-links-displayed="5" no-router />
      </template>
    </VFlexTableWrapper>
    <VerifyPaymentModal v-model="isVerifyModalOpen" :payment-id="Number(selectedId)"
      @update:list="() => { fetchData(); notify(); }" />
    <ConfirmActionModal @confirm-action="handleVerifyAction" />
  </div>
</template>
