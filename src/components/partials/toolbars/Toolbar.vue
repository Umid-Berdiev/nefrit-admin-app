<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'
import LocalesDropdown from '../dropdowns/LocalesDropdown.vue';
import ProfileDropdown from '../dropdowns/ProfileDropdown.vue';

const darkmode = useDarkmode()
</script>

<template>
  <div class="toolbar ml-auto">
    <div class="toolbar-link">
      <label tabindex="0" class="dark-mode ml-auto"
        @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
        <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
        <span></span>
      </label>
    </div>

    <LocalesDropdown class="mr-3" />
    <ProfileDropdown />

    <slot></slot>
  </div>
</template>
