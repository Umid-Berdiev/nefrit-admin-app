<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { isEmpty } from 'lodash'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import {
  fetchById,
  fetchPermissionByRoleId,
  updatePermissionMethodById,
} from '/@src/utils/api/role'
import { PermissionData, RoleData } from '/@src/utils/interfaces'

const { t, locale } = useI18n()
const viewWrapper = useViewWrapper()

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''
const currentRole = ref<RoleData>()
const permissionTabs = ref<PermissionData[]>([])
const selectedTab = ref<PermissionData>()

// here we setup our page meta with our permissions data
useHead({
  title: computed(() => t('Role_permissions')),
})

await fetchCurrentRole()
await fetchPermissions()
viewWrapper.setPageTitle(
  `${t('Role_permissions')}: ${currentRole.value?.name[locale.value]}`
)

async function fetchCurrentRole() {
  const res = await fetchById(Number(currentId))
  currentRole.value = await res
}

async function fetchPermissions() {
  const res = await fetchPermissionByRoleId(Number(currentId))
  permissionTabs.value = await res
  if (!isEmpty(permissionTabs.value)) selectedTab.value = permissionTabs.value[0]
}

function setSelectedTab(val: string) {
  selectedTab.value =
    permissionTabs.value?.find((item) => item.value === val) || permissionTabs.value[0]
}

async function updatePermissionMethod(methodValue: boolean, methodId: number) {
  const res1 = await updatePermissionMethodById(methodId, Number(methodValue))

  if (res1.status === 200) {
    const res2 = await fetchPermissionByRoleId(Number(currentId))
    permissionTabs.value = await res2
  }
}
</script>

<template>
  <div class="permissions-detail-wrapper">
    <!-- <ListWidgetSingle :title="currentRole?.name[locale]" straight class="list-widget-v3"> -->
    <VTabs
      :selected="selectedTab?.value"
      :tabs="permissionTabs"
      type="boxed"
      class="boxed_tabs"
      @update:selected="setSelectedTab"
    >
      <template #tab="{ activeValue }">
        <div class="active_tab_content p-5">
          <h1 class="is-size-5 mb-5">{{ $t('Methods') }}: {{ selectedTab?.label }}</h1>
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr v-for="method in selectedTab.methods">
                <td>{{ method.method }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock
                        :name="method.id"
                        color="primary"
                        :checked="method.value === 1 ? true : false"
                        @update:modelValue="(val: boolean) => updatePermissionMethod(val, method.id)"
                      />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </VTabs>
    <!-- </ListWidgetSingle> -->
  </div>
</template>

<style lang="scss" scoped>
.permissions-detail-wrapper {
  // Here we can add custom styles for the blog page
  // They will be only applied to this component
}

.table,
.table td {
  border: 1px solid #ccc;
}

.active_tab_content {
  background-color: var(--white);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-left: 1px solid var(--border);
}

.is-dark {
  .active_tab_content {
    background: var(--dark-sidebar-light-1);
  }
}
</style>
