<script setup lang="ts">

const emits = defineEmits<{
  (e: 'view'): void
  (e: 'edit'): void
  (e: 'remove'): void
}>()

</script>

<template>
  <div class="is-flex is-justify-content-flex-end">
    <VIconButton class="mr-2" outlined circle color="info" icon="feather:eye" @click.prevent="emits('view')">
      {{ $t('View') }}
    </VIconButton>
    <VIconButton class="mr-2" outlined circle color="primary" icon="feather:edit-2" @click.prevent="emits('edit')">
      {{ $t('Edit') }}
    </VIconButton>
    <VIconButton class="mr-2" outlined circle color="danger" icon="feather:trash" @click.prevent="emits('remove')">
      {{ $t('Remove') }}
    </VIconButton>
  </div>
</template>
