<script setup lang="ts">

const emits = defineEmits<{
  (e: 'edit'): void
  (e: 'update:password'): void
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
          <i aria-hidden="true" class="lnil lnil-pencil"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Edit') }}</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('update:password')
          close()
        }
      ">
        <div class="icon">
          <i class="lnir lnir-key" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Change_password') }}</span>
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
          <i class="lnir lnir-trash" aria-hidden="true"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Remove') }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
