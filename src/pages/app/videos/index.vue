<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import VFlex from '/@src/components/base/flex/VFlex.vue'
import VFlexItem from '/@src/components/base/flex/VFlexItem.vue'
import VTabs from '/@src/components/base/tabs/VTabs.vue'
import { TabHeader } from '/@src/utils/interfaces'

interface VideoPlayerData {
  author_name: string
  author_url: string
  height: 150
  html: string
  provider_name: string
  provider_url: string
  thumbnail_width: number
  thumbnail_height: number
  width: number
  thumbnail_url: string
  title: string
  type: string
  version: string
}

const { t, locale } = useI18n()
const tabs = reactive<TabHeader[]>([
  { label: t('Video_instructions'), value: 'videos', icon: 'feather:play' },
  {
    label: t('Document_instructions'),
    value: 'docs',
    icon: 'feather:file-text',
  },
])
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Instructions'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Instructions_Nefrit')),
})

const videoUrls: string[] = [
  'https://www.youtube.com/embed/yQE87PihkzY',
  'https://www.youtube.com/embed/0aK8hGMfrcY',
  'https://www.youtube.com/embed/H_yQfYHaAzU',
  'https://www.youtube.com/embed/7HG9ENRF9Z8',
]
</script>

<template>
  <div class="videos-content-inner">
    <VTabs selected="videos" :tabs="tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'videos'" class="mt-5">
          <div class="container is-fluid">
            <div class="columns is-multiline">
              <div class="column is-half" v-for="(item, itemIndex) in videoUrls">
                <iframe
                  width="100%"
                  height="400"
                  :src="item"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'docs'" class="mt-5">
          <VFlex column-gap="1rem">
            <VFlexItem>
              <VButton
                color="primary"
                outlined
                icon="feather:download"
                href="/docs/Administrator_uchun_qollanma.docx"
              >
                <span>Administrator uchun qo'llanma</span>
              </VButton>
            </VFlexItem>
            <VFlexItem>
              <VButton
                color="primary"
                outlined
                icon="feather:download"
                href="/docs/Foydalanuvchi_uchun_qollanma.docx"
              >
                <span>Foydalanuvchi uchun qo'llanma</span>
              </VButton>
            </VFlexItem>
          </VFlex>
        </div>
      </template>
    </VTabs>
  </div>
</template>
