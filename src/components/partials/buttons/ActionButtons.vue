<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits<{
  (e: 'view'): void
  (e: 'edit'): void
  (e: 'remove'): void
}>()

const hello = ref('world')
</script>

<template>
  <div class="is-flex is-justify-content-flex-end">
    <VIconButton class="mr-2" outlined circle color="info" icon="feather:eye" @click.prevent="emits('view')">
      View
    </VIconButton>
    <VIconButton class="mr-2" outlined circle color="danger" icon="feather:trash" @click.prevent="emits('remove')">
      Remove
    </VIconButton>
    <VIconButton class="mr-2" outlined circle color="primary" icon="feather:edit-2" @click.prevent="emits('edit')">
      Edit
    </VIconButton>
  </div>
</template>
