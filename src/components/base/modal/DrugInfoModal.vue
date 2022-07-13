<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n';

const props = defineProps({
  modelValue: Boolean,
  id: Number
})

const emit = defineEmits(['update:modelValue'])
const { t } = useI18n()
const columns = {
  name: {
    label: t('Drug_name'),
  },
  saleName: {
    label: t('Sale_name'),
  },
  composition: {
    label: t('Composition'),
  },
  drugForm: t('Drug_form'),
  patentNumber: t('Patent_number'),
  use: t('Use'),
  producer: t('Producer'),
  manufacturer: t('Manufacturer'),
} as const

</script>

<template>
  <VModal :open="modelValue" :title="$t('Drug_details')" actions="right" @close="emit('update:modelValue', false)">
    <template #content>
      <table class="table is-hoverable is-bordered is-fullwidth">
        <tbody>
          <tr>
            <td class="has-text-weight-bold">{{ columns.name.label }}</td>
            <td>NAME</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.saleName.label }}</td>
            <td>SALENAME</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.composition.label }}</td>
            <td>COMPOSITION</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.drugForm }}</td>
            <td>DRUGFORM</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.patentNumber }}</td>
            <td>PATENTNUMBER</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.use }}</td>
            <td>USE</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.producer }}</td>
            <td>PRODUCER</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.manufacturer }}</td>
            <td>MANUFACTURER</td>
          </tr>
        </tbody>
      </table>
    </template>
  </VModal>
</template>
