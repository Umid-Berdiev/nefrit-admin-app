<script setup lang="ts">

const emits = defineEmits<{
  (e: 'view'): void
  (e: 'conclusion:add'): void
  (e: 'conclusion:list'): void
  (e: 'notice:add'): void
  (e: 'notice:list'): void
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
          emits('conclusion:add')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:edit-2" />
        </div>
        <div class="meta">
          <span>{{ $t('Leave_feedback') }}</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('notice:add')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:edit-2" />
        </div>
        <div class="meta">
          <span>{{ $t('Make_notice') }}</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('conclusion:list')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:arrow-right" />
        </div>
        <div class="meta">
          <span>{{ $t('Go_to_conclusions') }}</span>
        </div>
      </a>

      <a role="menuitem" href="#" class="dropdown-item is-media" @click.prevent="
        () => {
          emits('notice:list')
          close()
        }
      ">
        <div class="icon">
          <VueIconify icon="feather:arrow-right" />
        </div>
        <div class="meta">
          <span>{{ $t('Go_to_notices_list') }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
