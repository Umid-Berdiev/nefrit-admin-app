<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  statementId: Number
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const statusId = ref('')

function onClose() {
  emit('update:modelValue', false)
}

function onSubmit(event: Event) {
  const values = Object.fromEntries(new FormData(event.target as HTMLFormElement))
  console.log({ values, application_id: props.statementId });

}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="$t('Add_notice')" actions="right" @close="onClose">
    <template #content>
      <form id="submit-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12">
            <VField :label="$t('Notice_message')" required>
              <VControl>
                <VInput name="message" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <VField :label="$t('Notice_details')" required>
              <VControl>
                <VTextarea name="text" :placeholder="$t('Add_text')" />
              </VControl>
            </VField>
          </div>
          <div class="column is-12">
            <StatusSelect v-model="statusId" />
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton color="primary" outlined type="submit" form="submit-form">{{ $t('Save') }}</VButton>
    </template>
  </VModal>
</template>
