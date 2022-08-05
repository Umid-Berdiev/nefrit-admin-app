<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "/@src/stores";

const emits = defineEmits<{
  (e: 'confirmAction'): void
}>()

const mainStore = useMainStore()
const state = computed(() => mainStore.confirmModalState)
const color = computed(() => mainStore.confirmModalOkButtonColor)

async function onClose() {
  mainStore.$patch({ confirmModalState: false })
  mainStore.$patch({ confirmModalOkButtonColor: 'danger' })
}

async function onConfirm() {
  mainStore.$patch({ confirmState: true })
  await onClose()
  emits('confirmAction')
}
</script>

<template>
  <VModal :open="state" actions="center" :title="$t('Confirm_action')" :noclose="true" @close="onClose"
    :cancel-label="$t('No')">
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton type="button" class="is-justify-content-center" :color="color" outlined @click="onConfirm">{{ $t('Yes')
      }}</VButton>
    </template>
  </VModal>
</template>
