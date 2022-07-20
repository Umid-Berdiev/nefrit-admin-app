<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "/@src/stores";

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
}
</script>

<template>
  <VModal :open="state" actions="center" :title="$t('Confirm_action')" :noclose="true" @close="onClose"
    :cancel-label="$t('Cancel')">
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton :color="color" outlined @click="onConfirm">{{ $t('Confirm') }}</VButton>
    </template>
  </VModal>
</template>
