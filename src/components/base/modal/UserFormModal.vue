<script setup lang="ts">
import { isEmpty } from 'lodash';
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import VSelect from '../form/VSelect.vue';
import VOption from '../form/VOption.vue';

// export interface UserInterface {
//   name: string,
//   shortname: string,
//   username: string,
//   email: string,
//   departament: number,
//   role: number,
// }

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
const departmentList = ref([])
const roleList = ref([])

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
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="emits('update:modelValue', false)">
    <template #content>
      <div class="modal-form">
        <div class="columns is-multiline">
          <div class="column is-6">
            <VField :label="$t('First_name') + '*'">
              <VControl>
                <VInput type="text" :placeholder="t('Type_first_name')" v-model="item.name" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Last_name')">
              <VControl>
                <VInput type="text" :placeholder="t('Type_last_name')" v-model="item.shortname" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Username') + '*'">
              <VControl>
                <VInput type="text" :placeholder="t('Type_username')" v-model="item.shortname" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Email') + '*'">
              <VControl>
                <VInput type="text" :placeholder="t('Type_email')" v-model="item.email" />
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Department') + '*'">
              <VControl>
                <VSelect :placeholder="t('Select_department')" v-model="item.department">
                  <VOption v-for="department, index in departmentList" :value="department.id"
                    v-text="department.name" />
                </VSelect>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Role') + '*'">
              <VControl>
                <VSelect :placeholder="t('Select_role')" v-model="item.role">
                  <VOption v-for="role, index in roleList" :value="role.id" v-text="role.name" />
                </VSelect>
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
