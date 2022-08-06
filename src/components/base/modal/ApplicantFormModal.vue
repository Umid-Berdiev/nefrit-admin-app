<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { fetchById, updateApplicant, fetchApplicantStatuses } from '/@src/utils/api/applicant';
import { ApplicantData } from '/@src/utils/interfaces';

const props = defineProps({
  modelValue: Boolean,
  applicantId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t, locale } = useI18n()
const title = ref(t('Edit'))
const applicantData: ApplicantData = reactive({})
const statusList = ref([])

onMounted(async () => {
  const res = await fetchApplicantStatuses(locale.value)
  statusList.value = res
})

watch(
  () => props.applicantId,
  async (newVal) => {
    if (!newVal) {
      Object.assign(applicantData, {})
    } else {
      const res = await fetchById(Number(props.applicantId))
      Object.assign(applicantData, res)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    props.applicantId && await updateApplicant(props.applicantId, applicantData)
    emits('update:list')
    onClose()
  } catch (error) {
    throw error
  }
}

function onClose() {
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="applicant-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Applicant_name')" required>
              <VControl>
                <VInput type="text" v-model="applicantData.name" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Boss_name')" required>
              <VControl>
                <VInput type="text" v-model="applicantData.boss_name" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Phone_number')">
              <VControl>
                <VInput type="text" v-model="applicantData.phone" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Fax')">
              <VControl>
                <VInput type="text" v-model="applicantData.fax" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('stir')">
              <VControl>
                <VInput type="text" v-model="applicantData.inn" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <CountrySelect v-model="applicantData.country" />
          </div>
          <div class="column is-6 is-align-self-flex-end">
            <input id="checkbox1" type="checkbox" :checked="applicantData.is_national" />
            <label for="checkbox1" class="checkbox">
              {{ $t('isNational') }}
            </label>
          </div>
          <div class="column is-12">
            <VField :label="$t('Address')">
              <VControl>
                <VTextarea rows="2" v-model="applicantData.address" />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="applicant-form">{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
