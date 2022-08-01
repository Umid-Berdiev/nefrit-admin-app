<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n';

const props = defineProps({
  modelValue: Boolean,
  id: Number,
  drugData: {
    type: Object,
    default: () => { }
  }
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
            <td>{{ drugData?.name }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.saleName.label }}</td>
            <td>{{ drugData?.trade_name }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.composition.label }}</td>
            <td>{{ drugData?.structure }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.drugForm }}</td>
            <td>{{ drugData?.structure }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.patentNumber }}</td>
            <td>{{ drugData?.patent }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.use }}</td>
            <td>{{ drugData?.usage }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.producer }}</td>
            <td>{{ drugData?.preparer.name }}</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.manufacturer }}</td>
            <td>{{ drugData?.manufacturer.name }}</td>
          </tr>
        </tbody>
      </table>
    </template>
  </VModal>
</template>
