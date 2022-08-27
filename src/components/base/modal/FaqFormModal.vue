<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { create, updateById, fetchById } from '/@src/utils/api/faq';

const props = defineProps({
  modelValue: Boolean,
  faqId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
const title = ref(t('Add'))
const isLoading = ref(false)
const question = reactive({
  uz: '',
  ru: '',
  en: ''
})
const answer = reactive({
  uz: '',
  ru: '',
  en: ''
})
const errors = reactive({
  "question.uz": [],
  "question.en": [],
  "question.ru": [],
  "answer.uz": [],
  "answer.en": [],
  "answer.ru": []
})

watch(
  () => props.faqId,
  async (newVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchById(Number(props.faqId))
      Object.assign(question, res.question)
      Object.assign(answer, res.answer)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    props.faqId ? await updateById(props.faqId, { question, answer }) : await create({ question, answer })
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  title.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  Object.assign(question, {
    uz: '',
    ru: '',
    en: ''
  })
  Object.assign(answer, {
    uz: '',
    ru: '',
    en: ''
  })
}

function clearErrors() {
  Object.assign(errors, {
    "question.uz": [],
    "question.en": [],
    "question.ru": [],
    "answer.uz": [],
    "answer.en": [],
    "answer.ru": []
  })
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
        <VTabs type="boxed" selected="uz" :tabs="[
          { label: $t('Uzbek'), value: 'uz' },
          { label: $t('Russian'), value: 'ru' },
          { label: $t('English'), value: 'en' },
        ]">
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'uz'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Question_uz')" required>
                  <VControl>
                    <VTextarea :placeholder="t('Type_Question_uz')" v-model="question.uz" />
                    <p class="help has-text-danger">{{ errors["question.uz"][0] }}</p>
                  </VControl>
                </VField>
                <VField :label="$t('Answer_uz')" required>
                  <VControl>
                    <VTextarea :placeholder="t('Add_Answer_uz')" v-model="answer.uz" />
                    <p class="help has-text-danger">{{ errors["answer.uz"][0] }}</p>
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Question_ru')">
                  <VControl>
                    <VTextarea :placeholder="t('Type_Question_ru')" v-model="question.ru" />
                  </VControl>
                </VField>
                <VField :label="$t('Answer_ru')">
                  <VControl>
                    <VTextarea :placeholder="t('Add_Answer_ru')" v-model="answer.ru" />
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Question_en')">
                  <VControl>
                    <VTextarea :placeholder="t('Type_Question_en')" v-model="question.en" />
                  </VControl>
                </VField>
                <VField :label="$t('Answer_en')">
                  <VControl>
                    <VTextarea :placeholder="t('Add_Answer_en')" v-model="answer.en" />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
        </VTabs>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="role-form" :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
