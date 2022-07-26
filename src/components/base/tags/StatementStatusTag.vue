<script setup lang="ts">
import { ref } from 'vue'
import { string } from 'zod';

type StatementStatusType = 'pending' | 'rejected' | 'completed'
interface Props {
  status: StatementStatusType
}

const props = defineProps<Props>()
</script>

<template>
  <VTag class="is-size-6" rounded :color="
    status === 'pending'
      ? 'warning'
      : status === 'rejected'
        ? 'danger'
        : status === 'completed'
          ? 'primary'
          : undefined
  ">
    {{ $t(status) }}
  </VTag>
</template>
