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
    label: t('Company_name'),
  },
  phone: {
    label: t('Phone_number'),
  },
  bossName: {
    label: t('Boss_name'),
  },
  website: t('Website'),
  stir: t('stir'),
  status: t('Status'),
  country: t('Country'),
  certificate: t('Certificate')
} as const

</script>

<template>
  <VModal :open="modelValue" :title="$t('Company_info')" actions="right" @close="emit('update:modelValue', false)">
    <template #content>
      <table class="table is-hoverable is-fullwidth is-bordered">
        <tbody>
          <tr>
            <td class="has-text-weight-bold">{{ columns.name.label }}</td>
            <td>Xeshelme</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.phone.label }}</td>
            <td>Wistmus</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.bossName.label }}</td>
            <td>Watson</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.website }}</td>
            <td>Joestar</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.stir }}</td>
            <td>Jensen</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.status }}</td>
            <td>Jensen</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.country }}</td>
            <td>Jensen</td>
          </tr>
          <tr>
            <td class="has-text-weight-bold">{{ columns.sertificate }}</td>
            <td>Jensen</td>
          </tr>
        </tbody>
      </table>
    </template>
  </VModal>
</template>
