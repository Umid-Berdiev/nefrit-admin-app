<script setup lang="ts">
import { ref } from 'vue'
import VTextarea from '../form/VTextarea.vue';

defineProps({
  modelValue: Boolean,
  selectedAnswer: String,
})

const emit = defineEmits(['update:modelValue']);

const files = ref([]);

function onFileUpload(event: any) {
  const target = event.target
  console.log('files: ', target.files);
  files.value.push(target.files[0]);
}

function onRemoveFile(id: any) {
  console.log('id on remove file: ', id);
  files.value = files.value.filter(file => file.lastModified !== id)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="$t('Add_feedback')" actions="right"
    @close="emit('update:modelValue', false)">
    <template #content>
      <h1>{{ $t('Your_answer') }}: {{ selectedAnswer && $t(selectedAnswer) }}</h1>
      <div class="columns is-multiline mt-5">
        <div class="column is-12">
          <VField :label="$t('conclusion_in_details') + '*'">
            <VControl>
              <VTextarea :placeholder="$t('Add_text')" :rows="2" />
            </VControl>
          </VField>
        </div>
        <div class="column is-12 is-flex">
          <div id="file-js-example" class="file w-auto is-warning">
            <label class="file-label">
              <input class="file-input" type="file" @change="onFileUpload">
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
        </div>
        <div class="column is-12">
          <div class="is-divider my-1"></div>
          <div class="is-flex is-flex-direction-column">
            <div v-for="(file, fileIndex) in files" :key="fileIndex"
              class="is-flex is-align-items-center	mb-3 is-justify-content-space-between	">
              <span class="has-text-white mr-3">{{ file.name }}</span>
              <button class="button is-warning is-outlined is-rounded p-3" @click="onRemoveFile(file.lastModified)">
                <span class="iconify" data-icon="feather:x" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined @click="close()">{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
