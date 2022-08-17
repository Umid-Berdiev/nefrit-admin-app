<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  updateStatementVote,
} from '/@src/utils/api/statement';
import { StatementVoteData } from '/@src/utils/interfaces'

const props = withDefaults(defineProps<{
  modelValue: boolean,
  item: StatementVoteData,
  parentId: number
}>(), {
  modelValue: false,
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
let title = ref(t('Add_vote'))
const voteData: StatementVoteData = reactive({
  description: '',
  value: 0
})
const errors = reactive({
  description: '',
  vote: ''
})

watch(
  () => props.item,
  (newVal) => {
    if (newVal) {
      voteData.description = newVal.description
      voteData.value = newVal.value
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit() {
  try {
    const values: StatementVoteData = {
      description: voteData.description,
      value: voteData.value
    }

    await updateStatementVote(props.parentId, values)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  }
}

function onClose() {
  Object.assign(errors, {
    description: '',
    value: ''
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
      <form id="feedback-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12 is-flex is-justify-content-center">
            <VField grouped>
              <VControl>
                <VRadio v-model="voteData.value" :value="1" :label="$t('Accept')" name="outlined_radio"
                  color="primary" />
              </VControl>
            </VField>
            <VField grouped>
              <VControl>
                <VRadio v-model="voteData.value" :value="0" :label="$t('Reject')" name="outlined_radio"
                  color="warning" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Comment')" required>
              <VControl :has-error="errors.description[0]">
                <VTextarea name="description" :placeholder="$t('Add_comment')" v-model="voteData.description"
                  @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.description[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="feedback-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
