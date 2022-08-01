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
  return date ? moment(date).format('DD.MM.YYYY') : ''
}
</script>

<template>
  <div class="timeline is-centered">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">{{ $t('Start') }}</span>
    </header>
    <div v-for="item, index in props.items" :key="item.id" class="timeline-item">
      <template v-if="item.key === 'stages'">
        <div class="timeline-marker is-icon has-text-dark" :class="[item.date && 'is-primary has-text-white']">
          {{ item.stage_number }}
        </div>
        <div class="timeline-content">
          <span>{{ formatDate(item.date) }}</span>
          <p class="heading">{{ item.stage }}</p>
          <p class="">{{ item.message }}</p>
        </div>
      </template>
      <template v-else>
        <div class="timeline-marker has-text-dark" :class="[item.date && 'is-primary has-text-white']">
        </div>
        <div class="timeline-content">
          <span>{{ formatDate(item.date) }}</span>
          <p class="heading">{{ item.department }}</p>
          <p class="">{{ item.message }}</p>
        </div>
      </template>

    </div>
    <header class="timeline-header">
      <span class="tag is-medium is-info">{{ $t('End') }}</span>
    </header>
  </div>
</template>
