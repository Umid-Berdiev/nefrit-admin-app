<script setup lang="ts">
import { useSlots, computed, reactive } from 'vue'

import { useVFieldContext } from '/@src/composable/useVFieldContext'

export type VFieldProps = {
  id?: string
  label?: string
  required?: boolean
  addons?: boolean
  textaddon?: boolean
  grouped?: boolean
  multiline?: boolean
  horizontal?: boolean
  subcontrol?: boolean
  raw?: boolean
}

const props = withDefaults(defineProps<VFieldProps>(), {
  id: undefined,
  label: undefined,
  required: false,
})
const vFieldContext = reactive(
  useVFieldContext({ id: props.id, inherit: !props.subcontrol })
)

const slots = useSlots()
const hasLabel = computed(() => Boolean(slots?.label?.() || props.label))
const isRequired = computed(() => Boolean(slots?.required?.() || props.required))
const classes = computed(() => {
  if (props.raw) return []

  return [
    'field',
    props.addons && 'has-addons',
    props.textaddon && 'has-textarea-addon',
    props.grouped && 'is-grouped',
    props.grouped && props.multiline && 'is-grouped-multiline',
    props.horizontal && 'is-horizontal',
  ]
})

defineExpose(vFieldContext)
</script>

<template>
  <div :class="classes">
    <template v-if="hasLabel && props.horizontal">
      <div class="field-label is-normal">
        <slot v-bind="vFieldContext" name="label">
          <VLabel>{{ props.label }}</VLabel>
          <span class="has-text-danger" v-if="isRequired">*</span>
        </slot>
      </div>
      <div class="field-body">
        <slot v-bind="vFieldContext"></slot>
      </div>
    </template>
    <template v-else-if="hasLabel">
      <slot v-bind="vFieldContext" name="label">
        <VLabel>
          {{ props.label }}
          <span class="has-text-danger" v-if="isRequired">*</span>
        </VLabel>
      </slot>

      <slot v-bind="vFieldContext"></slot>
    </template>
    <template v-else>
      <slot v-bind="vFieldContext"></slot>
    </template>
  </div>
</template>
