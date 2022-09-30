<script setup lang="ts">
interface Props {
  status: {
    name: string
    color: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <VTag
    class="is-size-6"
    rounded
    :color="status.color === 'primary' ? 'info' : status.color"
  >
    {{ status.name }}
  </VTag>
</template>
