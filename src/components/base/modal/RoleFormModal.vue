<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { create, updateById, fetchById } from '/@src/utils/api/role';

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
const description = reactive({
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
      Object.assign(description, {
        uz: '',
        ru: '',
        en: ''
      })
    } else {
      title.value = t('Edit')
      const res = await fetchById(Number(props.item))
      Object.assign(names, res.name)
      Object.assign(description, res.description)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    props.item ? await updateById(props.item, { name: names, description }) : await create({ name: names, description })
    emits('update:list')
    onClose()
  } catch (error) {
    throw error
  }
}

function onClose() {
  Object.assign(names, {
    uz: '',
    ru: '',
    en: ''
  })
  Object.assign(description, {
    uz: '',
    ru: '',
    en: ''
  })
  emits('update:modelValue', false)
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="role-form" class="modal-form" @submit.prevent="onSubmit">
        <VTabs type="boxed" :selected="'uz'" :tabs="[
          { label: $t('Uzbek'), value: 'uz' },
          { label: $t('Russian'), value: 'ru' },
          { label: $t('English'), value: 'en' },
        ]">
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'uz'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_uz')" required>
                  <VControl>
                    <VInput name="name_uz" type="text" :placeholder="t('Type_name_uz')" v-model="names.uz" required />
                  </VControl>
                </VField>
                <VField :label="$t('Description_uz')" required>
                  <VControl>
                    <VTextarea name="description_uz" :placeholder="t('Add_description_uz')" v-model="description.uz"
                      required />
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'ru'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_ru')">
                  <VControl>
                    <VInput name="name_ru" type="text" :placeholder="t('Type_name_ru')" v-model="names.ru" />
                  </VControl>
                </VField>
                <VField :label="$t('Description_ru')">
                  <VControl>
                    <VTextarea name="description_ru" :placeholder="t('Add_description_ru')" v-model="description.ru" />
                  </VControl>
                </VField>
              </div>
            </div>
            <div v-else-if="activeValue === 'en'" class="columns is-multiline pt-5">
              <div class="column is-12">
                <VField :label="$t('Name_en')">
                  <VControl>
                    <VInput name="name_en" type="text" :placeholder="t('Type_name_en')" v-model="names.en" />
                  </VControl>
                </VField>
                <VField :label="$t('Description_en')">
                  <VControl>
                    <VTextarea name="description_en" :placeholder="t('Add_description_en')" v-model="description.en" />
                  </VControl>
                </VField>
              </div>
            </div>
          </template>
        </VTabs>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="role-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
