<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  createStatementNotice,
  updateStatementNoticeById,
  fetchStatementNoticeById,
  fetchStatementNoticeStatuses
} from '/@src/utils/api/statement';
import { NoticeData } from '/@src/utils/interfaces'

const props = defineProps({
  modelValue: Boolean,
  itemId: {
    type: Number,
    default: null
  },
  parentId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
let title = ref(t('Add'))
const message = ref('')
const text = ref('')
const statusId = ref()
const noticeStatuses = await fetchStatementNoticeStatuses()
const errors = reactive({
  message: '',
  text: '',
  status_id: ''
})

watch(
  () => props.itemId,
  async (newVal) => {
    if (!newVal) {
      title.value = t('Add')
      message.value = ''
      text.value = ''
      statusId.value = ''
    } else {
      title.value = t('Edit')
      const res = await fetchStatementNoticeById(Number(props.itemId))
      message.value = res.message
      text.value = res.text
      statusId.value = res.status?.id
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    const noticeData: NoticeData = {
      message: message.value,
      text: text.value,
      application_id: props.parentId,
      status_id: statusId.value
    }

    props.itemId ?
      await updateStatementNoticeById(props.itemId, noticeData) :
      await createStatementNotice(noticeData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  }
}

function onClose() {
  message.value = ''
  text.value = ''
  statusId.value = ''
  Object.assign(errors, {
    message: '',
    text: '',
    status_id: ''
  })
  emits('update:modelValue', false)
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Notice_message')" required>
              <VControl :has-error="errors.message[0]">
                <VInput name="message" v-model="message" @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.message[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Notice_details')" required>
              <VControl :has-error="errors.text[0]">
                <VTextarea name="text" :placeholder="$t('Add_text')" v-model="text" @input="clearErrors" />
                <p class="help has-text-danger">{{ errors.text[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <StatusSelect name="status_id" v-model="statusId" :list="noticeStatuses" :is-required="true"
              @change="clearErrors" />
            <p class="help has-text-danger">{{ errors.status_id[0] }}</p>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
