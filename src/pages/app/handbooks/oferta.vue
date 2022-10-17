<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useViewWrapper } from '/@src/stores/viewWrapper'
import { editorConfig } from '/@src/data/ck-editor/editor-data'
import { fetchOfertaPageData, updateOfertaPageContent } from '/@src/utils/api/handbook'
import { useNotyf } from '/@src/composable/useNotyf'

// leaflet styles
import VFlex from '/@src/components/base/flex/VFlex.vue'

const { t } = useI18n()
const notif = useNotyf()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Oferta_page_form'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Oferta_page_form')),
})

const CKEditor = CKE.component
const isLoading = ref(false)
const data = reactive({
  oferta: {
    uz: '',
    ru: '',
    en: '',
  },
})
const errors = reactive({
  ['oferta.uz']: [],
  ['oferta.ru']: [],
  ['oferta.en']: [],
})

await fetchData()

function clearErrors() {
  Object.assign(errors, {
    ['oferta.uz']: [],
    ['oferta.ru']: [],
    ['oferta.en']: [],
  })
}

async function fetchData() {
  const res = await fetchOfertaPageData()
  await Object.assign(data, res)
}

async function onSubmit() {
  try {
    isLoading.value = true
    clearErrors()

    // const formData = new FormData()
    // formData.append('oferta[uz]', data.oferta.uz)
    // formData.append('oferta[ru]', data.oferta.ru)
    // formData.append('oferta[en]', data.oferta.en)

    const res = await updateOfertaPageContent(data)
    Object.assign(data, res)
    notif.success(`${t('Updated_successfully')}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    notif.error(`Error while updating data: ${error.message}`)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-8">
          <VTabs
            type="boxed"
            :selected="'uz'"
            :tabs="[
              { label: $t('Uzbek'), value: 'uz' },
              { label: $t('Russian'), value: 'ru' },
              { label: $t('English'), value: 'en' },
            ]"
          >
            <template #tab="{ activeValue }">
              <div
                v-if="activeValue === 'uz'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <VField :label="$t('Description')" required>
                    <CKEditor
                      v-model="data.oferta.uz"
                      :editor="ClassicEditor"
                      :config="editorConfig"
                    />
                    <p class="help has-text-danger">{{ errors['oferta.uz'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div
                v-else-if="activeValue === 'ru'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <VField :label="$t('Description')">
                    <CKEditor
                      v-model="data.oferta.ru"
                      :editor="ClassicEditor"
                      :config="editorConfig"
                    />
                    <p class="help has-text-danger">{{ errors['oferta.ru'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div
                v-else-if="activeValue === 'en'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <VField :label="$t('Description')">
                    <CKEditor
                      v-model="data.oferta.en"
                      :editor="ClassicEditor"
                      :config="editorConfig"
                    />
                    <p class="help has-text-danger">{{ errors['oferta.en'][0] }}</p>
                  </VField>
                </div>
              </div>
            </template>
          </VTabs>
        </div>
      </div>
      <VFlex>
        <VButton
          class="ml-auto"
          :loading="isLoading"
          color="primary"
          outlined
          type="submit"
          :disabled="isLoading"
          @click="onSubmit"
        >
          {{ $t('Save') }}
        </VButton>
      </VFlex>
    </div>
  </form>
</template>

<style lang="scss">
.tab-content2 {
  background: white;
}

.is-dark {
  .tab-content2 {
    background: none;
  }
}
</style>
