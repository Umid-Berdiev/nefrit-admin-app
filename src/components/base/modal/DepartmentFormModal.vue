<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { reactive, ref, watch } from 'vue';
import { create, updateById, fetchById } from '/@src/utils/api/department';

const props = defineProps({
  modelValue: Boolean,
  item: {
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
const names = reactive({
  uz: '',
  ru: '',
  en: ''
})

watch(
  () => props.item,
  async (newVal) => {
    // const isEmptyObj = Object.values(newVal).every(x => x === null || x === '');

    if (!newVal) {
      title.value = t('Add')
      Object.assign(names, {
        uz: '',
        ru: '',
        en: ''
      })
    } else {
      title.value = t('Edit')
      const res = await fetchById(Number(props.item))
      Object.assign(names, res.name)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    props.item ? await updateById(props.item, { name: names }) : await create({ name: names })
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
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose()">
    <template #content>
      <form id="department-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Name_in_uzbek')" required>
              <VControl>
                <VInput name="name_uz" :placeholder="t('Type_name_in_uzbek')" v-model="names.uz" required />
              </VControl>
            </VField>
            <VField :label="$t('Name_in_russian')">
              <VControl>
                <VInput name="name_ru" :placeholder="t('Type_name_in_russian')" v-model="names.ru" />
              </VControl>
            </VField>
            <VField :label="$t('Name_in_english')">
              <VControl>
                <VInput name="name_en" :placeholder="t('Type_name_in_english')" v-model="names.en" />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="department-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
