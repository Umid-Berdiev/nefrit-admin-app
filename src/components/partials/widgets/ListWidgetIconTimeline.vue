<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'
import VIcon from '../../base/icon/VIcon.vue';

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
</script>

<template>
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Start</span>
    </header>
    <div v-for="item, index in props.items" :key="item.id" class="timeline-item">
      <div class="timeline-marker is-primary" :class="[index === items.length - 1 && 'is-danger is-icon']">
      </div>
      <div class="timeline-content">
        <span>{{ item.time }}</span>
        <p class="heading">{{ item.title }}</p>
      </div>
    </div>
    <header class="timeline-header">
      <span class="tag is-medium is-primary">End</span>
    </header>
  </div>
</template>

