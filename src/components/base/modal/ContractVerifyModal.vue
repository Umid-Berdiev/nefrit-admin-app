<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "/@src/stores";
import { StatementContractData } from "/@src/utils/interfaces";

const props = defineProps<{
  contract: StatementContractData,
  modelValue: Boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirmAction'): void
}>()

const mainStore = useMainStore()
const color = computed(() => mainStore.confirmModalOkButtonColor)

async function onConfirm() {
  mainStore.$patch({ confirmState: true })
  onClose()
  emits('confirmAction')
}

function onClose() {
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" actions="center" :title="$t('Confirm_action')" :noclose="true" @close="onClose"
    :cancel-label="$t('No')">
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure') + '?'" />
      <table class="table is-bordered is-fullwidth">
        <tbody>
          <tr>
            <td>
              <span class="has-text-weight-bold">{{ $t('Contract_sum') }}</span>
            </td>
            <td class="has-text-right is-size-5 has-text-weight-bold">
              <span>{{ contract.payment_amount.toLocaleString() }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="has-text-weight-bold">{{ $t('Payment_total_sum') }}</span>
            </td>
            <td class="has-text-right is-size-5 has-text-weight-bold">
              <span>{{ contract.payment_total_sum.toLocaleString() }}</span>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="is-size-5 has-text-weight-bold">
              <span v-if="contract.payment_amount > contract.payment_total_sum">
                {{ $t('Contract_sum_more') }}: {{ (contract.payment_amount -
                    contract.payment_total_sum).toLocaleString()
                }}
              </span>
              <span v-else-if="contract.payment_amount < contract.payment_total_sum">
                {{ $t('Contract_sum_less') }}: {{ (contract.payment_total_sum -
                    contract.payment_amount).toLocaleString()
                }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #action>
      <VButton type="button" class="is-justify-content-center" :color="color" outlined @click="onConfirm">{{ $t('Yes')
      }}</VButton>
    </template>
  </VModal>
</template>
