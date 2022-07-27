<script setup lang="ts">

const emits = defineEmits<{
  (e: 'view'): void
  // (e: 'remove'): void
  (e: 'feedback'): void
  (e: 'conclusion'): void
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

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('feedback')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Leave_feedback') }}</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('conclusion')
          close()
        }
      ">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-briefcase"></i>
        </div>
        <div class="meta">
          <span>{{ $t('Go_to_conclusions') }}</span>
        </div>
      </a>

      <!-- <hr class="dropdown-divider" />

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
          <span>{{ $t('Remove') }}</span>
        </div>
      </a> -->
    </template>
  </VDropdown>
</template>
