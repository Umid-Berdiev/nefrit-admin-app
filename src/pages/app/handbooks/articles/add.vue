<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { useNotyf } from '/@src/composable/useNotyf';
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useViewWrapper } from '/@src/stores/viewWrapper';
import { ArticleData } from '/@src/utils/interfaces';
import { editorConfig } from '/@src/data/ck-editor/editor-data'
import { createArticle } from "/@src/utils/api/handbook";

const { t } = useI18n()
const notif = useNotyf()
const router = useRouter()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Articles'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Articles')),
})

const CKEditor = CKE.component
const isLoading = ref(false)
const articleData: ArticleData = reactive({
  author: '',
  date: '',
  image: '',
  text: {
    uz: '',
    ru: '',
    en: ''
  },
  title: {
    uz: '',
    ru: '',
    en: ''
  }
})
const errors = reactive({
  author: [],
  date: [],
  image: [],
  ['title.uz']: [],
  ['title.ru']: [],
  ['title.en']: [],
  ['text.uz']: [],
  ['text.ru']: [],
  ['text.en']: [],
})
const imageFiles = ref<File[]>([]);
const imageUrl = ref('');
const datePickerModelConfig = reactive({
  type: 'string',
  mask: 'YYYY-MM-DD', // Uses 'iso' if missing
})

function clearFields() {
  Object.assign(articleData, {
    author: '',
    date: '',
    image: '',
    text: {
      uz: '',
      ru: '',
      en: ''
    },
    title: {
      uz: '',
      ru: '',
      en: ''
    }
  })
}

function clearErrors() {
  Object.assign(errors, {
    author: [],
    date: [],
    image: [],
    ['title.uz']: [],
    ['title.ru']: [],
    ['title.en']: [],
    ['text.uz']: [],
    ['text.ru']: [],
    ['text.en']: [],
  })
}

async function onSubmit() {
  try {
    isLoading.value = true
    // clearFields()
    clearErrors()

    const formData = new FormData()
    formData.append("author", articleData.author)
    formData.append("date", articleData.date)
    formData.append("image", imageFiles.value.length ? imageFiles.value[0] : '')
    formData.append("title[uz]", articleData.title.uz)
    formData.append("title[ru]", articleData.title.ru)
    formData.append("title[en]", articleData.title.en)
    formData.append("text[uz]", articleData.text.uz)
    formData.append("text[ru]", articleData.text.ru)
    formData.append("text[en]", articleData.text.en)

    const res = await createArticle(formData)
    notif.success(`${t('Added_successfully')}!`)
    router.push(`/app/handbooks/articles/${res.id}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    notif.error(`Error while adding data: ${error.message}`)
  } finally {
    isLoading.value = false
  }
}

function onImageFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    imageUrl.value = URL.createObjectURL(target.files[0])
    imageFiles.value = [target.files[0]];
  }
}
</script>

<template>
  <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-8">
          <VTabs type="boxed" :selected="'uz'" :tabs="[
            { label: $t('Uzbek'), value: 'uz' },
            { label: $t('Russian'), value: 'ru' },
            { label: $t('English'), value: 'en' },
          ]">
            <template #tab="{ activeValue }">
              <div v-if="activeValue === 'uz'" class="columns is-multiline pt-5">
                <div class="column is-12">
                  <VField class="mb-5" :label="$t('Title')" required>
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_title_uz')" v-model="articleData.title.uz" />
                      <p class="help has-text-danger">{{ errors['title.uz'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField class="mb-5" :label="$t('Text')" required>
                    <CKEditor v-model="articleData.text.uz" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['text.uz'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
                <div class="column is-12">
                  <VField class="mb-5" :label="$t('Title')" required>
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_title_ru')" v-model="articleData.title.ru" />
                      <p class="help has-text-danger">{{ errors['title.ru'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField class="mb-5" :label="$t('Text')" required>
                    <CKEditor v-model="articleData.text.ru" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['text.ru'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
                <div class="column is-12">
                  <VField class="mb-5" :label="$t('Title')" required>
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_title_en')" v-model="articleData.title.en" />
                      <p class="help has-text-danger">{{ errors['title.en'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField class="mb-5" :label="$t('Text')" required>
                    <CKEditor v-model="articleData.text.en" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['text.en'][0] }}</p>
                  </VField>
                </div>
              </div>
            </template>
          </VTabs>
          <VFlex column-gap="1rem">
            <VFlexItem>
              <VField :label="$t('Author')" required>
                <VControl>
                  <VInput type="text" :placeholder="$t('Type_author')" v-model="articleData.author" />
                  <p class="help has-text-danger">{{ errors.author[0] }}</p>
                </VControl>
              </VField>
            </VFlexItem>
            <VFlexItem>
              <VDatePicker v-model="articleData.date" mode="date" :model-config="datePickerModelConfig" is24hr
                :masks='{ input: ["DD.MM.YYYY"] }'>
                <template #default="{ inputValue, inputEvents }">
                  <VField :label="$t('Date')">
                    <VControl icon="feather:calendar">
                      <VInput :value="inputValue" v-on="inputEvents" />
                      <p class="help has-text-danger">{{ errors.date[0] }}</p>
                    </VControl>
                  </VField>
                </template>
              </VDatePicker>
              <!-- <VField :label="$t('Date')">
                <VControl>
                  <VInput type="text" :placeholder="$t('Type_date')" v-model="articleData.date" />
                  <p class="help has-text-danger">{{ errors.date[0] }}</p>
                </VControl>
              </VField> -->
            </VFlexItem>
          </VFlex>
        </div>
        <div class="column is-4">
          <VFlex flex-direction="column">
            <VFlexItem align-self="center">
              <VField grouped>
                <VControl>
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="image" @change="onImageFileUpload" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span class="file-label"> {{ $t('Choose_an_image') }} </span>
                      </span>
                    </label>
                  </div>
                </VControl>
              </VField>
              <img :src="imageUrl" alt="" />
            </VFlexItem>
          </VFlex>
        </div>
      </div>
      <VFlex>
        <VButton class="ml-auto" :loading="isLoading" color="primary" outlined type="submit" :disabled="isLoading"
          @click="onSubmit">
          {{ $t('Save') }}
        </VButton>
      </VFlex>
    </div>
  </form>
</template>

<style lang="scss">
#map {
  width: 100%;
  min-width: 200px;
  height: 20rem !important;
}
</style>
