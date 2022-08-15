<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { useHead } from '@vueuse/head';
import { LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet';
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useViewWrapper } from '/@src/stores/viewWrapper';
import { AboutPageData } from '/@src/utils/interfaces';
import { editorConfig } from '/@src/data/ck-editor/editor-data'
import { fetchAboutPageData, updateAboutPageContent } from "/@src/utils/api/handbook";
import { useNotyf } from '/@src/composable/useNotyf';

// leaflet styles
import 'leaflet/dist/leaflet.css';

const { t } = useI18n()
const notif = useNotyf()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Handbook_page'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Handbook_page')),
})

const openstreetMapUrl = ref(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
);
const zoomLevel = ref(15);
const CKEditor = CKE.component
const isLoading = ref(false)
const data: AboutPageData = reactive({
  name: {
    uz: '',
    ru: '',
    en: ''
  },
  description: {
    uz: '',
    ru: '',
    en: ''
  },
  address: {
    uz: '',
    ru: '',
    en: ''
  },
  logo: null,
  image: null,
  point_x: 41.2543754,
  point_y: 69.1679692
})
const errors = reactive({
  ['name.uz']: [],
  ['description.uz']: [],
  ['address.uz']: [],
  ['name.ru']: [],
  ['description.ru']: [],
  ['address.ru']: [],
  ['name.en']: [],
  ['description.en']: [],
  ['address.en']: [],
  logo: [],
  image: [],
  point_x: [],
  point_y: []
})
const logoFiles = ref<File[]>([]);
const imageFiles = ref<File[]>([]);
const logoUrl = ref('');
const imageUrl = ref('');
const currentLocation = ref([
  41.2543754,
  69.1679692
])
await fetchData()

function clearErrors() {
  Object.assign(errors, {
    ['name.uz']: [],
    ['description.uz']: [],
    ['address.uz']: [],
    ['name.ru']: [],
    ['description.ru']: [],
    ['address.ru']: [],
    ['name.en']: [],
    ['description.en']: [],
    ['address.en']: [],
    logo: [],
    image: [],
    point_x: [],
    point_y: []
  })
}

async function fetchData() {
  const res = await fetchAboutPageData()
  await Object.assign(data, res)
  logoUrl.value = res.logo
  imageUrl.value = res.image
  if (res.point_y && res.point_y) {
    currentLocation.value = [
      res.point_x,
      res.point_y
    ]
  }
}

async function onSubmit() {
  try {
    isLoading.value = true
    clearErrors()

    const formData = new FormData()
    formData.append("name[uz]", data.name.uz)
    formData.append("name[ru]", data.name.ru)
    formData.append("name[en]", data.name.en)
    formData.append("description[uz]", data.description.uz)
    formData.append("description[ru]", data.description.ru)
    formData.append("description[en]", data.description.en)
    formData.append("address[uz]", data.address.uz)
    formData.append("address[ru]", data.address.ru)
    formData.append("address[en]", data.address.en)
    formData.append("logo", logoFiles.value.length ? logoFiles.value[0] : '')
    formData.append("image", imageFiles.value.length ? imageFiles.value[0] : '')
    formData.append("point_x", currentLocation.value[0])
    formData.append("point_y", currentLocation.value[1])
    formData.append("image", imageFiles.value.length ? imageFiles.value[0] : '')

    const res = await updateAboutPageContent(formData)
    Object.assign(data, res)
    notif.success(`${t('Updated_successfully')}`)
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    notif.error(`Error while updating data: ${error.message}`)
  } finally {
    isLoading.value = false
  }
}

function onLogoFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    const reader = new FileReader()
    reader.readAsDataURL(target.files[0])
    reader.onload = () => {
      logoUrl.value = reader.result?.toString() || ''
    }
    reader.onerror = (error) => console.log(error)

    logoFiles.value = [target.files[0]];
  }
}

function onImageFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files?.length) {
    const reader = new FileReader()
    reader.readAsDataURL(target.files[0])
    reader.onload = () => {
      imageUrl.value = reader.result?.toString() || ''
    }
    reader.onerror = (error) => console.log(error)

    imageFiles.value = [target.files[0]];
  }
}

function changeLatLng(e: Event) {
  const targetLatLng = e.target.getLatLng();

  console.log('lat: ', targetLatLng.lat);
  console.log('lng: ', targetLatLng.lng);

  currentLocation.value[0] = targetLatLng.lat;
  currentLocation.value[1] = targetLatLng.lng;
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
                  <VField :label="$t('Name')" required>
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_name_uz')" v-model="data.name.uz" />
                      <p class="help has-text-danger">{{ errors['name.uz'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Address')" required>
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_address')" v-model="data.address.uz" />
                      <p class="help has-text-danger">{{ errors['address.uz'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Description')" required>
                    <CKEditor v-model="data.description.uz" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['description.uz'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
                <div class="column is-12">
                  <VField :label="$t('Name')">
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_name')" v-model="data.name.ru" />
                      <p class="help has-text-danger">{{ errors['name.ru'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Address')">
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_address')" v-model="data.address.ru" />
                      <p class="help has-text-danger">{{ errors['address.ru'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Description')">
                    <CKEditor v-model="data.description.ru" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['description.ru'][0] }}</p>
                  </VField>
                </div>
              </div>
              <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
                <div class="column is-12">
                  <VField :label="$t('Name')">
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_name')" v-model="data.name.en" />
                      <p class="help has-text-danger">{{ errors['name.en'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Address')">
                    <VControl>
                      <VInput type="text" :placeholder="$t('Type_address')" v-model="data.address.en" />
                      <p class="help has-text-danger">{{ errors['address.en'][0] }}</p>
                    </VControl>
                  </VField>
                  <VField :label="$t('Description')">
                    <CKEditor v-model="data.description.en" :editor="ClassicEditor" :config="editorConfig" />
                    <p class="help has-text-danger">{{ errors['description.en'][0] }}</p>
                  </VField>
                </div>
              </div>
            </template>
          </VTabs>
          <div class="is-divider" />
          <VFlex>
            <VFlexItem style="width:100%;">
              <l-map id="map" v-model:zoom="zoomLevel" :center="currentLocation">
                <l-tile-layer :url="openstreetMapUrl" layer-type="base" name="OpenStreetMap" />
                <l-marker :lat-lng="currentLocation" draggable @moveend="changeLatLng" />
              </l-map>
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
                      <input class="file-input" type="file" name="resume" @change="onLogoFileUpload" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span class="file-label"> {{ $t('Choose_a_logo') }} </span>
                      </span>
                    </label>
                  </div>
                </VControl>
              </VField>
              <img :src="logoUrl" alt="" width="150" />
            </VFlexItem>
            <div class="is-divider my-5"></div>
            <VFlexItem align-self="center">
              <VField grouped>
                <VControl>
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" @change="onImageFileUpload" />
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
      <VButton :loading="isLoading" color="primary" outlined type="submit" :disabled="isLoading" @click="onSubmit">
        {{ $t('Save') }}
      </VButton>
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
