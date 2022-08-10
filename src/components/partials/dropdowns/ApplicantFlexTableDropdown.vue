<script setup lang="ts">

const emits = defineEmits<{
  (e: 'view'): void
  (e: 'edit'): void
  (e: 'block'): void
}>()
</script>

<template>
  <VDropdown icon="feather:more-vertical" class="is-pushed-mobile" spaced right>
    <template #content="{ close }">
      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('view')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-eye"></i>
        </div>
        <div class="meta">
          <span>{{ $t('View') }}</span>
          <span>{{ $t('View_applicant_details') }}</span>
        </div>
      </a>

      <!-- <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('edit')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Edit') }}</span>
          <span>{{ $t('Edit_applicant') }}</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('block')
          close()
        }
      ">
        <div class="icon">
          <i class="lnir lnir-ban" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Block') }}</span>
          <span>{{ $t('Block_applicant') }}</span>
        </div>
      </a> -->
    </template>
  </VDropdown>
</template>
