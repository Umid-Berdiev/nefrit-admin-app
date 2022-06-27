<template>
  <div class="mobile-subsidebar">
    <div class="inner">
      <div class="sidebar-title">
        <h3>{{ $t('Statements') }}</h3>
      </div>

      <ul class="submenu" data-simplebar>
        <VCollapseLinks>
          <template #header>
            {{ $t('Personal') }}
            <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right" />
          </template>

          <RouterLink :to="{ name: 'app' }" class="is-submenu">
            <i aria-hidden="true" class="lnil lnil-home"></i>
            <span>{{ $t('Home') }}</span>
          </RouterLink>
        </VCollapseLinks>
      </ul>
    </div>
  </div>
</template>
