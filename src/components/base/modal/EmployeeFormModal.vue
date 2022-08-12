<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
import { create, fetchById, updateById } from '/@src/utils/api/employee';
import { EmployeeData } from '/@src/utils/interfaces';

const props = defineProps({
  modelValue: Boolean,
  employeeId: {
    type: Number,
    default: null
  }
})

const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'update:list'): void
}>()

const { t } = useI18n()
const isUploading = ref(false)
const isLoading = ref(false)
const title = ref(t('Add'))
const avatarFile = ref<File>()
const employeeData: EmployeeData = reactive({
  avatar: '',
  username: '',
  email: '',
  firstname: '',
  lastname: '',
  password: '',
  password_confirmation: '',
  department_id: null,
  role_id: null,
})
const errors = reactive({
  avatar: [],
  username: [],
  email: [],
  firstname: [],
  lastname: [],
  password: [],
  password_confirmation: [],
  department_id: [],
  role_id: []
})
const employeeAvatar = computed(() => employeeData.avatar || "/images/avatars/svg/vuero-1.svg")
watch(
  () => props.employeeId,
  async (newVal) => {
    if (!newVal) {
      Object.assign(employeeData, {})
    } else {
      const res = await fetchById(Number(props.employeeId))
      Object.assign(employeeData, res)
    }
  },
  { deep: true, immediate: true }
)

async function onSubmit(event: Event) {
  try {
    clearErrors()
    isLoading.value = true
    const formData = new FormData()
    formData.append('avatar', avatarFile.value || '')
    formData.append('username', employeeData.username)
    formData.append('email', employeeData.email)
    formData.append('firstname', employeeData.firstname)
    formData.append('lastname', employeeData.lastname)
    formData.append('password', employeeData.password)
    formData.append('password_confirmation', employeeData.password_confirmation)
    formData.append('department_id', employeeData.department_id)
    formData.append('role_id', employeeData.role_id)

    props.employeeId ? await updateById(props.employeeId, formData) : await create(formData)
    emits('update:list')
    onClose()
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
    // throw error
  } finally {
    isLoading.value = false
  }
}

const onAddFile = (event: Event) => {
  if (errors.avatar?.length) errors.avatar = []
  avatarFile.value = event.target.files[0]
}

const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }
  avatarFile.value = undefined
  employeeData.avatar = ''
  // console.log('file removed', file)
}

function onClose() {
  clearErrors()
  clearEmployeeData()
  avatarFile.value = undefined
  isUploading.value = false
  emits('update:modelValue', false)
}

function clearErrors() {
  Object.assign(errors, {
    avatar: [],
    username: [],
    email: [],
    firstname: [],
    lastname: [],
    password: [],
    password_confirmation: [],
    department_id: [],
    role_id: []
  })
}

function clearEmployeeData() {
  Object.assign(employeeData, {
    avatar: '',
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    password_confirmation: '',
    department_id: null,
    role_id: null,
  })
}
</script>

<template>
  <VModal :open="modelValue" size="large" :title="title" actions="right" @close="onClose">
    <template #content>
      <form id="employee-form" class="modal-form" @submit.prevent="onSubmit">
        <div class="columns is-multiline">
          <div class="column is-12 has-text-centered fieldset">
            <VAvatar size="xl" class="profile-v-avatar">
              <template #avatar>
                <img v-if="!isUploading" class="avatar" :src="employeeAvatar" alt="Employee avatar" />
                <VFilePond v-else class="profile-filepond" name="profile_filepond"
                  :chunk-retry-delays="[500, 1000, 3000]" label-idle="<i class='lnil lnil-cloud-upload'></i>"
                  :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']" :image-preview-height="140"
                  :image-resize-target-width="140" :image-resize-target-height="140" image-crop-aspect-ratio="1:1"
                  style-panel-layout="compact circle" style-load-indicator-position="center bottom"
                  style-progress-indicator-position="right bottom" style-button-remove-item-position="left bottom"
                  style-button-process-item-position="right bottom" @change="onAddFile" @removefile="onRemoveFile" />
                <VIconButton v-if="!isUploading" icon="feather:edit-2" class="edit-button is-edit" circle tabindex="0"
                  @keydown.space.prevent="isUploading = true" @click="isUploading = true" />
                <VIconButton v-else icon="feather:arrow-left" class="edit-button is-back" circle tabindex="0"
                  @keydown.space.prevent="isUploading = false" @click="isUploading = false" />
              </template>
            </VAvatar>
            <p class="help has-text-danger">{{ errors.avatar[0] }}</p>
          </div>
          <div class="column is-6">
            <VField :label="$t('Username')" required>
              <VControl>
                <VInput type="text" v-model="employeeData.username" />
                <p class="help has-text-danger">{{ errors.username[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Email')" required>
              <VControl>
                <VInput type="text" v-model="employeeData.email" />
                <p class="help has-text-danger">{{ errors.email[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('First_name')" required>
              <VControl>
                <VInput type="text" v-model="employeeData.firstname" />
                <p class="help has-text-danger">{{ errors.firstname[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <VField :label="$t('Last_name')">
              <VControl>
                <VInput type="text" v-model="employeeData.lastname" />
                <p class="help has-text-danger">{{ errors.lastname[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div v-if="!employeeId" class="column is-6">
            <VField :label="$t('Password')" required>
              <VControl>
                <VInput type="password" v-model="employeeData.password" />
                <p class="help has-text-danger">{{ errors.password[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div v-if="!employeeId" class="column is-6">
            <VField :label="$t('Confirm_password')" required>
              <VControl>
                <VInput type="password" v-model="employeeData.password_confirmation" />
                <p class="help has-text-danger">{{ errors.password_confirmation[0] }}</p>
              </VControl>
            </VField>
          </div>
          <div class="column is-6">
            <DepartmentSelect v-model="employeeData.department_id" is-required />
            <p class="help has-text-danger">{{ errors.department_id[0] }}</p>
          </div>
          <div class="column is-6">
            <RoleSelect v-model="employeeData.role_id" is-required />
            <p class="help has-text-danger">{{ errors.role_id[0] }}</p>
          </div>
        </div>
      </form>
    </template>
    <template #action="{ close }">
      <VButton :loading="isLoading" type="submit" color="primary" outlined form="employee-form">
        {{ $t('Save') }}
      </VButton>
    </template>
  </VModal>
</template>

<style scoped lang="scss">
.profile-v-avatar {
  position: relative;

  .edit-button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
  }
}
</style>
