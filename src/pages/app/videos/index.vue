<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useViewWrapper } from '/@src/stores/viewWrapper'

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
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Video_instructions'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Video_instructions_Nefrit')),
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
</template>
