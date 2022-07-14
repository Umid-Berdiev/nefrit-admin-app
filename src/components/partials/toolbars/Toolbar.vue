<script setup lang="ts">
import { useDarkmode } from '/@src/stores/darkmode'
import LocalesDropdown from '../dropdowns/LocalesDropdown.vue';
import ProfileDropdown from '../dropdowns/ProfileDropdown.vue';

const darkmode = useDarkmode()
</script>

<template>
  <div class="toolbar ml-auto">
    <!-- <div class="toolbar-link">
      <RouterLink to="/app/profile/profile-edit">
        <i class="fas fa-user fa-lg has-text-primary" aria-hidden="true"></i>
      </RouterLink>
    </div> -->
    <div class="toolbar-link">
      <label tabindex="0" class="dark-mode ml-auto"
        @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()">
        <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
        <span></span>
      </label>
    </div>

    <!-- <a tabindex="0" class="toolbar-link right-panel-trigger" @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')">
      <p class="has-text-warning">{{ locale.toUpperCase() }}</p>
    </a> -->

    <LocalesDropdown class="mr-3" />
    <ProfileDropdown />

    <slot></slot>
  </div>
</template>
