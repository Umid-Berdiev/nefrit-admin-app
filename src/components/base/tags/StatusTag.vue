<script setup lang="ts">
import { ref } from 'vue'
import { string } from 'zod';

interface Props {
  status: {
    name: string,
    color: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <VTag class="is-size-6" rounded :color="status.color">
    {{ $t(status.name) }}
  </VTag>
</template>
