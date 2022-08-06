<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { updatePassword } from '/@src/utils/api/employee';

const props = defineProps({
  modelValue: Boolean,
  employeeId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const { t } = useI18n()
const isLoading = ref(false)
const title = ref(t('Update_password'))
const passwordText = ref('')
const passwordConfirmText = ref('')
const errors = reactive({
  password: [],
  password_confirmation: []
})

async function onSubmit(event: Event) {
  try {
    isLoading.value = true

    await updatePassword(props.employeeId, {
      password: passwordText.value,
      password_confirmation: passwordConfirmText.value
    })

    onClose()
  } catch (error: any) {
    clearErrors()
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

function onClose() {
  clearErrors()
  clearEmployeeData()
  emits('update:modelValue', false)
}

function clearErrors() {
  Object.assign(errors, {
    password: [],
    password_confirmation: [],
  })
}

function clearEmployeeData() {
  passwordText.value = ''
  passwordConfirmText.value = ''
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="employee-password-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-6">
            <VField :label="$t('Password')" required>
              <VControl>
                <VInput type="password" v-model="passwordText" />
                <p class="help has-text-danger">{{ errors.password[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Confirm_password')" required>
              <VControl>
                <VInput type="password" v-model="passwordConfirmText" />
                <p class="help has-text-danger">{{ errors.password_confirmation[0] }}</p>
              </VControl>
            </VField>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" type="submit" color="primary" outlined form="employee-password-form">{{ $t('Save')
      }}
      </VButton>
    </template>
  </VModal>
</template>
