<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

export interface RoleInterface {
  name: string,
  description: string,
}

const props = defineProps({
  modelValue: Boolean,
  item: {
    type: Object,
    default: () => ({})
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const { t } = useI18n()
const title = ref(t('Add'))

watch(
  () => props.item,
  (newVal) => {
    const isEmptyObj = Object.values(newVal).every(x => x === null || x === '');

    if (isEmptyObj) {
      title.value = t('Add')
    } else title.value = t('Edit')
  },
  { deep: true }
)

function onSubmit(event: Event) {
  const values = Object.fromEntries(new FormData(event.target))
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="emits('update:modelValue', false)">
    <template #content>
      <form class="modal-form" id="submit-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Name')" required>
              <VControl>
                <VInput name="role_name" type="text" :placeholder="t('Type_name')" v-model="item.name" required />
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton type="submit" color="primary" outlined form="submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
