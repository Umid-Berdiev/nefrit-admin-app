<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import {
  verifyPayment, fetchNotVerifiedStatements
} from '/@src/utils/api/payment';
import { StatementData } from '/@src/utils/interfaces'

const props = defineProps({
  modelValue: Boolean,
  paymentId: {
    type: Number,
    default: null
  },
})
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'update:list'): void
}>()
const { t, locale } = useI18n()
const route = useRoute()
const contractId = (route.params?.id as string) ?? null
let title = ref(t('Verify_payment'))
const statementsList = ref<StatementData[]>()
const selectedIds = ref<number[]>([])
const errors = reactive({
  applications: '',
})

await fetchStatementsList()

async function fetchStatementsList() {
  try {
    const res = await fetchNotVerifiedStatements(Number(contractId))
    statementsList.value = res
  } catch (error) {
    console.log(error);
  }
}

async function onSubmit(event: Event) {
  try {
    await verifyPayment(props.paymentId, selectedIds.value)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  }
}

function onClose() {
  selectedIds.value = []
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="payment-verify-form" class="modal-form" @submit.prevent="onSubmit" style="min-height: 200px;">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField v-slot="{ id }">
              <VControl>
                <Multiselect v-model="selectedIds" :attrs="{ id }" :searchable="false" :options="statementsList"
                  :placeholder="$t('Select_statements')" valueProp="id" label="code" mode="tags"
                  :close-on-select="false" :append-new-option="false" />
              </VControl>
            </VField>
            <p class="help has-text-danger">{{ errors.applications[0] }}</p>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="payment-verify-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
