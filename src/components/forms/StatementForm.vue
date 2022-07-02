<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const columns = {
  company: {
    label: t('applied_legal_entity'),
  },
  drug: {
    label: t('drug_name'),
  },
  date: {
    label: t('applied_at'),
  },
  status: t('Status'),
  stage: t('Stage'),
  isApproved: t('IsApproved'),

} as const
const isStatementEditModalOpen = ref(false)
</script>

<template>
  <div class="content">
    <div class="is-flex is-justify-content-right mb-3">
      <VIconButton color="success" icon="feather:edit" circle outlined @click="isStatementEditModalOpen = true" />
    </div>
    <table class="table is-hoverable is-fullwidth">
      <tbody>
        <tr>
          <td>{{ columns.company.label }}</td>
          <td>Bergmann</td>
        </tr>
        <tr>
          <td>{{ columns.drug.label }}</td>
          <td>Wistmus</td>
        </tr>
        <tr>
          <td>{{ columns.date.label }}</td>
          <td>Watson</td>
        </tr>
        <tr>
          <td>{{ columns.status }}</td>
          <td>Joestar</td>
        </tr>
        <tr>
          <td>{{ columns.stage }}</td>
          <td>Jensen</td>
        </tr>
        <tr>
          <td>{{ columns.isApproved }}</td>
          <td>Jensen</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.is-dark .content {
  background: var(--dark-sidebar-light-6);
  border-radius: var(--radius-large);
  padding: 20px;
}
</style>
