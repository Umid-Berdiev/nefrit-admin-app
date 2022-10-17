<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMainStore } from '/@src/stores'

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
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton
        type="button"
        class="is-justify-content-center"
        outlined
        :color="color"
        :disabled="isLoading"
        :loading="isLoading"
        @click="onConfirm"
      >
        {{ $t('Yes') }}
      </VButton>
    </template>
  </VModal>
</template>
