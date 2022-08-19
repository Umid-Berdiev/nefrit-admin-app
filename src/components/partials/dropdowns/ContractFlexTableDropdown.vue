<script setup lang="ts">

const props = defineProps({
  removeBtn: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits<{
  (e: 'view'): void
  // (e: 'edit'): void
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
          <span>{{ $t('View') }}</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <a v-if="removeBtn" role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('remove')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Remove') }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
