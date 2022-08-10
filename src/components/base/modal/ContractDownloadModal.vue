<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import CKE from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { useMainStore } from "/@src/stores";
import { editorData, editorConfig } from '/@src/data/ck-editor/editor-data'
import { ContractTemplateData } from "/@src/utils/interfaces";
import { fetchContractTemplates } from "/@src/utils/api/contract-templates";

const mainStore = useMainStore()
const CKEditor = CKE.component

const state = computed(() => mainStore.contractDownloadModalState)
const templateList = ref<ContractTemplateData[]>([])
const selectedTemplateId = ref<number>()
const selectedTemplate = computed(() => templateList.value.find(item => item.id === selectedTemplateId.value) || ({
  name: '',
  body: '',
  payment_amount: ''
}))
const fileName = ref('')

watch(
  () => state.value,
  async () => {
    if (state.value) {
      const res = await fetchContractTemplates()
      templateList.value = res
      fileName.value = 'contract_template_' + Date.now()
    }
  }
)

async function onClose() {
  mainStore.$patch({ contractDownloadModalState: false })
}

function downloadCKEditorData() {
  let preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
  let postHtml = "</body></html>";
  let html = preHtml + selectedTemplate.value?.body + postHtml;

  // Specify link url
  let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  // Specify file name
  let filename = fileName.value + '.doc';

  // Create download link element
  let downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  // Create a link to the file
  downloadLink.href = url;

  // Setting the file name
  downloadLink.download = filename;

  //triggering the function
  downloadLink.click();

  document.body.removeChild(downloadLink);
}

</script>

<template>
  <VModal size="big" :open="state" actions="center" :title="$t('Download_contract_template')" @close="onClose"
    :cancel-label="$t('Cancel')">
    <template #content>
      <div class="columns is-multiline">
        <div class="column is-12">
          <VField :label="$t('Select_template')">
            <VControl>
              <VSelect v-model="selectedTemplateId">
                <VOption v-for="template, index in templateList" :value="template.id" v-text="template.name" />
              </VSelect>
            </VControl>
          </VField>
          <VField :label="$t('Set_file_name')">
            <VControl>
              <VInput v-model="fileName" />
            </VControl>
          </VField>
        </div>
        <div class="column is-12">
          <CKEditor v-model="selectedTemplate.body" :editor="ClassicEditor" :config="editorConfig" />
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined @click="downloadCKEditorData">{{ $t('Download') }}</VButton>
    </template>
  </VModal>
</template>
