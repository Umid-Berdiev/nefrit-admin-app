<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchById } from '/@src/utils/api/statement'

// leaflet styles
// import VFlex from '/@src/components/base/flex/VFlex.vue'
import { StatementData } from '/@src/utils/interfaces'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Drug_instructions'))

// here we setup our page meta with our statement data
useHead({
  title: computed(() => t('Drug_instructions')),
})

const apiData: StatementData = reactive({})
const paramsID = (route.params?.id as string) ?? null

await fetchData()

async function fetchData() {
  const res = await fetchById(Number(paramsID))
  Object.assign(apiData, res)
}
</script>

<template>
  <form id="role-form" class="modal-form">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-8">
          <VTabs
            type="boxed"
            :selected="'uz'"
            :tabs="[
              { label: $t('Uzbek'), value: 'uz' },
              { label: $t('Russian'), value: 'ru' },
              { label: $t('English'), value: 'en' },
            ]"
          >
            <template #tab="{ activeValue }">
              <div
                v-if="activeValue === 'uz'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <p v-html="apiData.drug?.instruction?.general?.uz"></p>
                  <p v-html="apiData.drug?.instruction?.pharmacological?.uz"></p>
                  <p v-html="apiData.drug?.instruction?.usage?.uz"></p>
                  <p v-html="apiData.drug?.instruction?.prevention?.uz"></p>
                  <p v-html="apiData.drug?.instruction?.protest?.uz"></p>
                </div>
              </div>
              <div
                v-else-if="activeValue === 'ru'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <p v-html="apiData.drug?.instruction?.general?.ru"></p>
                  <p v-html="apiData.drug?.instruction?.pharmacological?.ru"></p>
                  <p v-html="apiData.drug?.instruction?.usage?.ru"></p>
                  <p v-html="apiData.drug?.instruction?.prevention?.ru"></p>
                  <p v-html="apiData.drug?.instruction?.protest?.ru"></p>
                </div>
              </div>
              <div
                v-else-if="activeValue === 'en'"
                class="columns is-multiline pt-5 m-0 tab-content2"
              >
                <div class="column is-12">
                  <p v-html="apiData.drug?.instruction?.general?.en"></p>
                  <p v-html="apiData.drug?.instruction?.pharmacological?.en"></p>
                  <p v-html="apiData.drug?.instruction?.usage?.en"></p>
                  <p v-html="apiData.drug?.instruction?.prevention?.en"></p>
                  <p v-html="apiData.drug?.instruction?.protest?.en"></p>
                </div>
              </div>
            </template>
          </VTabs>
        </div>
      </div>
      <!-- <VFlex>
        <VButton
          class="ml-auto"
          :loading="isLoading"
          color="primary"
          outlined
          type="submit"
          :disabled="isLoading"
          @click="onSubmit"
        >
          {{ $t('Save') }}
        </VButton>
      </VFlex> -->
    </div>
  </form>
</template>

<style lang="scss">
.tab-content2 {
  background: white;
}

.is-dark {
  .tab-content2 {
    background: none;
  }
}
</style>
