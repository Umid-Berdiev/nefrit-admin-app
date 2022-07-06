<script setup lang="ts">

const emits = defineEmits<{
  (e: 'view'): void
  (e: 'edit'): void
  (e: 'remove'): void
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
          <span>View</span>
          <span>View user details</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('edit')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>Edit</span>
          <span>Edit user</span>
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
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>Remove</span>
          <span>Remove user</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
