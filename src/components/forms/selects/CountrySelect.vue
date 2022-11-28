<script setup lang="ts">
import { isEmpty } from 'lodash'
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useApi } from '/@src/composable/useApi'
import { useNotyf } from '/@src/composable/useNotyf'
import { CountryData } from '/@src/utils/interfaces'

const props = withDefaults(
  defineProps<{
    modelValue: number | string
  }>(),
  {
    modelValue: '',
  }
)

const api = useApi()
const notif = useNotyf()
const countries = ref<CountryData[]>([])

watchEffect(async () => {
  if (isEmpty(countries.value)) {
    try {
      const res = await api({
        url: '/api/admin/country',
      })

      countries.value = res.data?.data
    } catch (error: any) {
      notif.error(`Error while fetching countries: ${error.message}`)
    }
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const selectedCountry = computed({
  get: () => {
    return props.modelValue
  },
  set: async (val) => {
    emits('update:modelValue', val)
  },
})
</script>

<template>
  <VField>
    <VLabel>{{ $t('Country') }}</VLabel>
    <VControl class="has-icons-left select-icon" icon="fas fa-globe">
      <VSelect v-model="selectedCountry" v-bind="$attrs">
        <VOption disabled hidden value="">{{ $t('Select') }}...</VOption>
        <VOption
          v-for="country in countries"
          :key="country.id"
          :value="country.id"
          v-text="country.name"
        />
      </VSelect>
    </VControl>
  </VField>
</template>

<style lang="scss">
.is-dark .select-icon {
  color: antiquewhite;
}
</style>
