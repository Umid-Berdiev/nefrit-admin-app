<script setup lang="ts">

const emits = defineEmits<{
  // (e: 'view'): void
  (e: 'edit'): void
  (e: 'remove'): void
}>()
</script>

<template>
  <VDropdown icon="feather:more-vertical" class="is-pushed-mobile" spaced right>
    <template #content="{ close }">
      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('edit')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:edit-2" />
        </div>
        <div class="meta">
          <span>{{ $t('Edit') }}</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('remove')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:trash" />
        </div>
        <div class="meta">
          <span>{{ $t('Remove') }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
