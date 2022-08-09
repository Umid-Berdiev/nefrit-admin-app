<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { fetchPermissionByRoleId, updatePermissionMethodById } from "/@src/utils/api/role";
import { PermissionData } from "/@src/utils/interfaces";

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Role_permissions'))

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''
const permissionTabs = ref<PermissionData[]>();
const selectedTab = ref<PermissionData>()

// here we setup our page meta with our permissions data
useHead({
  title: computed(() => t('Role_permissions'))
})

await fetchPermissions()

async function fetchPermissions() {
  const res = await fetchPermissionByRoleId(Number(currentId))
  permissionTabs.value = await res
  selectedTab.value = permissionTabs.value?.length && permissionTabs.value[0]
}

function setSelectedTab(val: string) {
  selectedTab.value = permissionTabs.value?.find(item => item.value === val) || permissionTabs.value[0]
}

async function updatePermissionMethod(event: Event) {
  const target = event.target as HTMLInputElement
  console.log({ target });

  const res = await updatePermissionMethodById(Number(target.name), Number(target.checked))
}
</script>

<template>
  <div class="permissions-detail-wrapper">
    <VTabs :selected="selectedTab?.value" :tabs="permissionTabs" type="boxed" class="boxed_tabs"
      @update:selected="setSelectedTab">
      <template #tab="{ activeValue }">
        <div class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr v-for="method in selectedTab.methods">
                <td>{{ $t(method.method) }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock :name="method.id" color="primary" :true-value="1" :false-value="0"
                        :checked="method.value" @change="updatePermissionMethod" />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </VTabs>
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
