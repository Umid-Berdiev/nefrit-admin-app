<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { updateStatementStage } from '/@src/utils/api/statement'
import { StageData } from '/@src/utils/interfaces'
import { fetchStages } from '/@src/utils/api/department'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    statementId: number
    statementStage: number
  }>(),
  {
    modelValue: false,
  }
)

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:stage'): void
  (e: 'update:data'): void
}>()

const { t, locale } = useI18n()
const stagesList = ref<StageData[]>([])

const errors = reactive({
  stage_id: '',
})
let title = ref(t('Change_statement_stage'))
const selectedStage = ref<number>()
const isLoading = ref(false)

onMounted(async () => {
  const res = await fetchStages()
  stagesList.value = res
})

watch(
  () => props.statementStage,
  (newVal) => {
    if (newVal) {
      selectedStage.value = newVal
    }
  },
  { immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    await updateStatementStage(Number(props.statementId), {
      stage_id: selectedStage.value,
    })
    emits('update:data')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  Object.assign(errors, {
    stage_id: '',
  })
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form
        id="statement-stage-form"
        class="modal-form"
        @submit.prevent="onSubmit"
        style="min-height: 200px"
      >
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Stages')">
              <VControl>
                <Multiselect
                  v-model="selectedStage"
                  :options="stagesList"
                  :placeholder="$t('Select_stages')"
                  label="name"
                  value-prop="id"
                />
                <p class="help has-text-danger">{{ errors['stage_id'][0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton
        :loading="isLoading"
        color="primary"
        outlined
        type="submit"
        form="statement-stage-form"
        :disabled="isLoading"
      >
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
