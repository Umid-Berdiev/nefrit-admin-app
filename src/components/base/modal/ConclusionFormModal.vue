<script setup lang="ts">
import { ref } from 'vue'
import VTextarea from '../form/VTextarea.vue';

defineProps({
  modelValue: Boolean,
  selectedAnswer: String,
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const files = ref<File[]>([]);

function onFileUpload(event: any) {
  const target = event.target
  console.log('files: ', target.files);
  files.value?.push(target.files[0]);
}

function onFileRemove(id: string | number) {
  console.log('id on remove file: ', id);
  files.value = files.value?.filter(file => file.lastModified !== id)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="$t('Add_feedback')" actions="right"
    @close="emits('update:modelValue', false)">
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
        <div class="column is-12">
          <VFileInput :files="files" @file-upload="onFileUpload" @file-remove="onFileRemove" />
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined @click="close()">{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
