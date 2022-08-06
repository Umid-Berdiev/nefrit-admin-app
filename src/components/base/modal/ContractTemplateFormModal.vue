<script setup lang="ts">
import { computed, ref } from "vue";
import { useMainStore } from "/@src/stores";
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { editorData, editorConfig } from '/@src/data/ck-editor/editor-data'

const props = defineProps({
  modelValue: Boolean,
  item: {
    type: Object,
    default: () => ({})
  }
})

const mainStore = useMainStore()
const CKEditor = CKE.component

const state = computed(() => mainStore.contractDownloadModalState)
const templateList = ref([])

async function onClose() {
  mainStore.$patch({ contractDownloadModalState: false })
}

function onSubmit(event: Event) {
  const values = Object.fromEntries(new FormData(event.target))
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <VModal size="big" :open="modelValue" actions="center" :title="$t('Download_contract_template')"
    @close="$emit('update:modelValue', false)">
    <template #content>
      <form id="contract-template-form" class="modal-form" @submit="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Template_title')" required>
              <VControl>
                <VInput name="role_name" type="text" :placeholder="$t('Type_name')" v-model="item.title" required />
              </VControl>
            </VField>
            <VField :label="$t('Type_amount')" required>
              <VControl>
                <VInput name="role_name" type="text" :placeholder="$t('Type_amount')" v-model="item.amount" required />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <CKEditor v-model="editorData" :editor="ClassicEditor" :config="editorConfig">
            </CKEditor>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" form="contract-template-form" color="primary" outlined>{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
