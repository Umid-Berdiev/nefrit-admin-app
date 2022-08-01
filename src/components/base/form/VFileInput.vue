<script setup lang="ts">
const props = defineProps<{
  files: File[]
  remoteFiles: File[]
  errorMessage: ''
}>()

const emits = defineEmits<{
  (e: 'file-upload', event: Event): void
  (e: 'file-remove', id: number): void
  (e: 'remote-file-remove', id: number): void
}>();
</script>

<template>
  <div>
    <div id="file-js-example" class="file w-auto is-warning">
      <label class="file-label">
        <input class="file-input" type="file" @change="emits('file-upload', $event)">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            {{ $t('Choose_a_file') }}…
          </span>
        </span>
      </label>
    </div>
    <p class="help has-text-danger">{{ errorMessage }}</p>
    <div class="is-flex is-flex-direction-column">
      <div class="is-divider my-3"></div>
      <!-- <template v-if="remoteFiles?.length > 0"> -->
      <div v-for="(file, fileIndex) in remoteFiles" :key="fileIndex"
        class="is-flex is-align-items-center mb-3 is-justify-content-space-between">
        <span class="mr-3">{{ file.name }}</span>
        <button type="button" class="button is-warning is-outlined is-rounded p-3"
          @click="emits('remote-file-remove', file.id)">
          <span class="iconify" data-icon="feather:x" />
        </button>
      </div>
      <!-- </template> -->
      <div v-for="(file, fileIndex) in files" :key="fileIndex"
        class="is-flex is-align-items-center mb-3 is-justify-content-space-between">
        <span class="mr-3">{{ file.name }}</span>
        <button type="button" class="button is-warning is-outlined is-rounded p-3"
          @click="emits('file-remove', file.lastModified)">
          <span class="iconify" data-icon="feather:x" />
        </button>
      </div>
    </div>
  </div>
</template>
