<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { createContactItem, fetchContactItem, updateContactItem } from '/@src/utils/api/handbook';
import { ContactItemData } from '/@src/utils/interfaces';

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
const title = ref(t('Add'))
const isLoading = ref(false)
const itemData: ContactItemData = reactive({
  icon: '',
  name: '',
  status: 'active',
  type: 'url',
  value: ''
})
const errors = reactive({
  icon: [],
  name: [],
  status: [],
  type: [],
  value: []
})
const imageFiles = ref<File[]>([]);
const imageUrl = ref('');

watch(
  () => props.itemId,
  async (newVal) => {
    if (newVal) {
      title.value = t('Edit')
      const res = await fetchContactItem(Number(props.itemId))
      Object.assign(itemData, res)
      imageUrl.value = res.icon
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    isLoading.value = true
    const formData = new FormData()
    formData.append("icon", imageFiles.value.length ? imageFiles.value[0] : '')
    formData.append('name', itemData.name)
    formData.append('status', itemData.status)
    formData.append('type', itemData.type)
    formData.append('value', itemData.value)

    props.itemId ? await updateContactItem(props.itemId, formData) : await createContactItem(formData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  title.value = t('Add')
  clearFields()
  clearErrors()
  emits('update:modelValue', false)
}

function clearFields() {
  Object.assign(itemData, {
    icon: '',
    name: '',
    status: 'active',
    type: 'url',
    value: ''
  })
}

function clearErrors() {
  Object.assign(errors, {
    icon: [],
    name: [],
    status: [],
    type: [],
    value: []
  })
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
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="contact-item-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline pt-5">
          <div class="column is-12">
            <VField :label="$t('Name')" required>
              <VControl>
                <VInput type="text" :placeholder="t('Type_name')" v-model="itemData.name" />
                <p class="help has-text-danger">{{ errors.name[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Select_a_type')">
              <VControl>
                <VRadio v-model="itemData.type" value="phone" :label="$t('Phone')" color="success" />
                <VRadio v-model="itemData.type" value="email" :label="$t('Email')" color="warning" />
                <VRadio v-model="itemData.type" value="url" :label="$t('Url')" color="info" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Value')" required>
              <VControl>
                <VInput type="text" :placeholder="t('Type_value')" v-model="itemData.value" />
                <p class="help has-text-danger">{{ errors.value[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Select_a_status')">
              <VControl>
                <VRadio v-model="itemData.status" value="active" :label="$t('Active')" color="warning" />
                <VRadio v-model="itemData.status" value="inactive" :label="$t('Inactive')" color="success" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField grouped>
              <VControl>
                <div class="file has-name">
                  <label class="file-label">
                    <input class="file-input" type="file" name="image" @change="onImageFileUpload" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-cloud-upload-alt"></i>
                      </span>
                      <span class="file-label"> {{ $t('Choose_an_icon') }} </span>
                    </span>
                    <!-- <span class="file-name light-text"> 22082020_project_budget.xls </span> -->
                  </label>
                </div>
              </VControl>
            </VField>
            <img :src="imageUrl" alt="" width="200" />
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" color="primary" outlined type="submit" form="contact-item-form"
        :disabled="isLoading">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>
