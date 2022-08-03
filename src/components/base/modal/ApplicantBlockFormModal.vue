<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  blockApplicant,
} from '/@src/utils/api/applicant';
import { ConclusionData } from '/@src/utils/interfaces'

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
let title = ref(t('Block_applicant'))
const block_reason = ref('')
const errors = reactive({
  block_reason: ''
})

async function onSubmit(event: Event) {
  try {
    await blockApplicant(props.itemId, { block_reason: block_reason.value })
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  }
}

function onClose() {
  block_reason.value = ''
  Object.assign(errors, {
    block_reason: '',
  })
  emits('update:modelValue', false)
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('block_reason')" required>
              <VControl :has-error="errors.block_reason[0]">
                <VTextarea name="block_reason" :placeholder="$t('Add_text')" v-model="block_reason"
                  @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.block_reason[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="danger" outlined type="submit" form="submit-form">{{ $t('Block') }}</VButton>
    </template>
  </VModal>
</template>
