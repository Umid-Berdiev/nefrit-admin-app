<script setup lang="ts">
import moment from 'moment';

const props = withDefaults(
  defineProps<{
    items?: any[]
    squared?: boolean
    colored?: boolean
  }>(),
  {
    items: () => [],
  }
)

function formatDate(date: string) {
  return date ? moment(date).format('YYYY-MM-DD') : ''
}
</script>

<template>
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Start</span>
    </header>
    <div v-for="item, index in props.items" :key="item.id" class="timeline-item">
      <div class="timeline-marker is-primary" :class="[index === items.length - 1 && 'is-danger is-icon']"></div>
      <div class="timeline-content">
        <span>{{ formatDate(item.date) }}</span>
        <p class="heading">{{ item.stage }}</p>
        <p class="">{{ item.message }}</p>
      </div>
    </div>
    <header class="timeline-header">
      <span class="tag is-medium is-primary">End</span>
    </header>
  </div>
</template>

<!-- <style scoped lang="scss">
.timeline.is-centered .timeline-item:nth-of-type(2n) {
  align-self: flex-start;
  flex-direction: row-reverse;
  margin-left: 0;
  margin-right: 2em;
}
</style> -->

