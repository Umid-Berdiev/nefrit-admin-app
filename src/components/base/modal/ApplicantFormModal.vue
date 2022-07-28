<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';

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
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <div class="modal-form">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Boss_name')" required>
              <VControl>
                <VInput type="text" placeholder="Ex: A cool project" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField class="is-image-select" label="Project Member">
              <VControl>
                <Multiselect placeholder="Select employees" track-by="name" label="name" :search="true" :options="[
                  {
                    value: 'alice',
                    name: 'Alice Carasca',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                  {
                    value: 'erik',
                    name: 'Erik Kovalsky',
                    image: '/images/avatars/svg/vuero-1.svg',
                  },
                  {
                    value: 'melany',
                    name: 'melany Wallace',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                  {
                    value: 'tara',
                    name: 'Tara Svenson',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                  {
                    value: 'mary',
                    name: 'Mary Lebowski',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                  {
                    value: 'irina',
                    name: 'Irina Vierbovsky',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                  {
                    value: 'jonathan',
                    name: 'Jonathan Krugger',
                    image: '/images/avatars/svg/vuero-3.svg',
                  },
                ]" :max-height="145">
                  <template #singlelabel="{ value }">
                    <div class="multiselect-single-label">
                      <img class="select-label-icon" :src="value.image" alt="" />
                      {{ value.name }}
                    </div>
                  </template>
                  <template #option="{ option }">
                    <img class="select-option-icon" :src="option.image" alt="" />
                    {{ option.name }}
                  </template>
                </Multiselect>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField class="is-image-select" label="Project Type *">
              <VControl>
                <Multiselect placeholder="Select language" track-by="name" label="name" :search="true" :options="[
                  {
                    value: 'javascript',
                    name: 'Javascript',
                    image: '/images/icons/stacks/js.svg',
                  },
                  {
                    value: 'reactjs',
                    name: 'ReactJS',
                    image: '/images/icons/stacks/reactjs.svg',
                  },
                  {
                    value: 'vuejs',
                    name: 'VueJS',
                    image: '/images/icons/stacks/vuejs.svg',
                  },
                ]" :max-height="145">
                  <template #singlelabel="{ value }">
                    <div class="multiselect-single-label">
                      <img class="select-label-icon" :src="value.image" alt="" />
                      {{ value.name }}
                    </div>
                  </template>
                  <template #option="{ option }">
                    <img class="select-option-icon" :src="option.image" alt="" />
                    {{ option.name }}
                  </template>
                </Multiselect>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField label="Project Budget *">
              <VControl>
                <VInput type="text" placeholder="Ex: $3,500" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField label="Project URL *">
              <VControl>
                <VInput type="text" class="VInput" placeholder="Ex: https://project.com" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField label="Description *">
              <VControl>
                <VTextarea rows="3" placeholder="Details about the project..." />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined @click="close()">{{ $t('Save_changes') }}</VButton>
    </template>
  </VModal>
</template>
