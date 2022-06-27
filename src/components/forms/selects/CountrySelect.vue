<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import countries from '/@src/assets/json/countries.json'

const props = defineProps({
  modelValue: {
    type: String,
    default: 'UZ'
  }
});
const emit = defineEmits(['update:modelValue']);
const { t } = useI18n()

const selectedCountry = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emit('update:modelValue', val);
  }
});

</script>

<template>
  <VField>
    <VLabel>{{ t('Country') }}</VLabel>
    <VControl>
      <VSelect v-model="selectedCountry">
        <VOption value="">{{ t('Select') }} ...</VOption>
        <VOption v-for="country in countries" :key="country.iso2" :value="country.iso2" v-text="country.name" />
      </VSelect>
    </VControl>
  </VField>
</template>

