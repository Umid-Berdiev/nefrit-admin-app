<script setup lang="ts">
import { computed } from 'vue'
import countries from '/@src/assets/json/countries.json'

const props = defineProps({
  modelValue: {
    type: String,
    default: 'UZ'
  }
});

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const selectedCountry = computed({
  get: () => {
    return props.modelValue;
  },
  set: async (val) => {
    emits('update:modelValue', val);
  }
});

</script>

<template>
  <VField>
    <VLabel>{{ $t('Country') }}</VLabel>
    <VControl>
      <VSelect v-model="selectedCountry">
        <VOption value="">{{ $t('Select') }}...</VOption>
        <VOption v-for="country in countries" :key="country.iso2" :value="country.name" v-text="country.name" />
      </VSelect>
    </VControl>
  </VField>
</template>

