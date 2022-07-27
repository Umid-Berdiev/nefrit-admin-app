<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

// we import our useApi helper
import { useViewWrapper } from '/@src/stores/viewWrapper'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle(t('Role_permissions'))

// We want to retrieve the post from the API where the id matches the current id
const route = useRoute()
const currentId = (route.params?.id as string) ?? ''
const permissionTabs = ref([
  {
    label: t('Users'),
    value: 'users',
  },
  {
    label: t('Roles'),
    value: 'roles',
  },
  {
    label: t('Reports'),
    value: 'reports',
  },
  {
    label: t('Applicants'),
    value: 'applicants',
  },
  {
    label: t('Statements'),
    value: 'statements',
  },
]);

// here we setup our page meta with our permissions data
useHead({
  title: computed(() => t('Role_permissions')),
})


</script>

<template>
  <div class="permissions-detail-wrapper">
    <VTabs selected="users" :tabs="permissionTabs" type="boxed" class="boxed_tabs">
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'users'" class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>{{ $t('View_users_list') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('View_user') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Edit_user') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Remove_user') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Edit_self_data') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="activeValue === 'roles'" class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>{{ $t('View_roles_list') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('View_role') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Edit_role') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Remove_role') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="activeValue === 'reports'" class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>{{ $t('View_report') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Print_report') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="activeValue === 'applicants'" class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>{{ $t('View_applicant') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Edit_applicant') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Remove_applicant') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="activeValue === 'statements'" class="active_tab_content p-5">
          <table class="table is-striped is-fullwidth">
            <tbody>
              <tr>
                <td>{{ $t('View_statement') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Edit_statement') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
                    </VControl>
                  </VField>
                </td>
              </tr>
              <tr>
                <td>{{ $t('Remove_statement') }}</td>
                <td>
                  <VField>
                    <VControl>
                      <VSwitchBlock color="primary" :checked="true" />
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
