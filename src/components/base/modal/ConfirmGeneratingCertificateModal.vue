<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMainStore } from '/@src/stores'
import { DrugData } from '/@src/utils/interfaces'

const props = defineProps<{ drugData: DrugData }>()
const emits = defineEmits<{
  (e: 'confirmAction'): void
}>()

const mainStore = useMainStore()
const state = computed(() => mainStore.confirmModalState)
const color = computed(() => mainStore.confirmModalOkButtonColor)
const isLoading = ref(false)

async function onClose() {
  mainStore.$patch({ confirmModalState: false })
  mainStore.$patch({ confirmModalOkButtonColor: 'danger' })
}

async function onConfirm() {
  isLoading.value = true
  mainStore.$patch({ confirmState: true })
  await onClose()
  emits('confirmAction')
  isLoading.value = false
}
</script>

<template>
  <VModal
    actions="center"
    :open="state"
    :title="$t('Confirm_action')"
    :noclose="true"
    :cancel-label="$t('No')"
    @close="onClose"
  >
    <template #content>
      <VPlaceholderSection
        :title="$t('Are_you_sure')"
        :subtitle="$t('Approve_drug_data')"
      />
      <!-- <p class="is-size-5 has-text-centered">{{ $t('Approve_drug_data') }}</p> -->
      <table class="table is-bordered is-fullwidth">
        <tbody>
          <tr>
            <td>{{ $t('Drug_name') }}:</td>
            <td>{{ drugData?.name }}</td>
          </tr>
          <tr>
            <td>{{ $t('Applicant') }}:</td>
            <td>{{ drugData?.created_by.name }}</td>
          </tr>
          <tr>
            <td>{{ $t('Producer') }}:</td>
            <td>{{ drugData?.preparer.name }}</td>
          </tr>
          <tr>
            <td>{{ $t('Drug_form') }}:</td>
            <td>{{ drugData?.drug_figure.name }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #action>
      <VButton
        type="button"
        class="is-justify-content-center"
        outlined
        color="primary"
        :disabled="isLoading"
        :loading="isLoading"
        @click="onConfirm"
      >
        {{ $t('Yes') }}
      </VButton>
    </template>
  </VModal>
</template>
