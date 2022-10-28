<script setup lang="ts">
import { initDarkmode } from '/@src/stores/darkmode'

// This is the global app setup function

/**
 * Initialize the darkmode watcher
 *
 * @see /@src/stores/darkmode
 */
initDarkmode()
</script>

<template>
  <div>
    <!-- <Suspense>
      <RouterView v-slot="{ Component }">
        <Transition name="fade-slow" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </Suspense> -->
    <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <Transition mode="out-in" name="fade">
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component" :key="route.fullPath" />

              <!-- loading state -->
              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>
