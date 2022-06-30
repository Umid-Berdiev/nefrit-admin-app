<script setup lang="ts">
import { computed } from "vue";
import { useMainStore } from "/@src/stores";

const mainStore = useMainStore()

const state = computed(() => mainStore.confirmModalState)
</script>

<template>
  <VModal :open="state" actions="center" :title="$t('Confirm_action')" :noclose="true"
    @close="mainStore.$patch({ confirmModalState: false })">
    <template #content>
      <VPlaceholderSection :title="$t('Are_you_sure')" />
    </template>
    <template #action>
      <VButton color="danger" raised>Confirm</VButton>
    </template>
  </VModal>
</template>
