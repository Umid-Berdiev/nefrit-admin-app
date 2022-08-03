<script setup lang="ts">
import { ref } from 'vue'
import { StatementDocumentData } from '/@src/utils/interfaces.js'
import { Icon } from "@iconify/vue";

export interface VCollapseProps {
  items: StatementDocumentData[]
  itemOpen?: number
  openItems?: number[]
  withChevron?: boolean
  exclusive?: boolean
}

const props = withDefaults(defineProps<VCollapseProps>(), {
  items: () => [],
  itemOpen: undefined,
  openItems: () => [],
})

const internalItemOpen = ref<number | undefined>(props.itemOpen)
const internalOpenItems = ref(props.openItems)
// const toggle = (key: number) => {
//   if (internalItemOpen.value === key) {
//     internalItemOpen.value = undefined
//     return
//   }

//   internalItemOpen.value = key
// }
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key)

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length)

    if (!wasOpen) {
      internalOpenItems.value.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1)
  } else {
    internalOpenItems.value.push(key)
  }
}
</script>

<template>
  <details v-for="(item, key) in items" :key="key" :class="[withChevron && 'has-chevron', !withChevron && 'has-plus']"
    :open="internalOpenItems?.includes(key) ?? undefined" class="collapse">
    <slot name="collapse-item" :item="item" :index="key" :toggle="toggle">
      <summary class="collapse-header" tabindex="0" @keydown.space.prevent="() => toggle(key)"
        @click.prevent="() => toggle(key)">
        <h3>
          <slot name="collapse-item-summary" :item="item" :index="key" :toggle="toggle">
            {{ (key + 1) + '. ' + item.name }}
          </slot>
        </h3>
        <div class="collapse-icon">
          <VIcon v-if="withChevron" icon="feather:chevron-down" />
          <VIcon v-else-if="!withChevron" icon="feather:plus" />
        </div>
      </summary>
      <div class="collapse-content">
        <p>
          <slot name="collapse-item-content" :item="item" :index="key" :toggle="toggle">
            <ul v-if="item.files.length">
              <li v-for="file in item.files">
                <a :href="file.file" class="has-text-primary">
                  <Icon icon="feather:file" height="1rem" />
                  <span class="ml-3">{{ file.name }}</span>
                </a>
              </li>
            </ul>
            <span v-else>{{ $t('Docs_not_attached_yet') }}</span>
          </slot>
        </p>
      </div>
    </slot>
  </details>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.collapse {
  @include vuero-s-card;

  padding: 0;
  margin-bottom: 1.5rem;

  &.has-plus {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(45deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &.has-chevron {
    &[open] {
      .collapse-header {
        .collapse-icon {
          transform: rotate(180deg);
        }
      }

      .collapse-content {
        display: block;
      }
    }
  }

  &[open] {
    .collapse-icon {
      border-color: var(--fade-grey-dark-3) !important;
      box-shadow: var(--light-box-shadow);
    }
  }

  .collapse-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    cursor: pointer;

    h3 {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    .collapse-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      width: 30px;
      background: var(--white);
      border-radius: var(--radius-rounded);
      border: 1px solid transparent;
      transition: all 0.3s; // transition-all test

      >span {
        display: block;
        height: 16px;
        width: 16px;
      }

      svg {
        height: 16px;
        width: 16px;
        // color: var(--light-text);
      }
    }
  }

  .collapse-content {
    display: none;
    padding: 0 20px 20px;
    // color: var(--light-text);
    font-family: var(--font);

    p:not(:last-child) {
      margin-bottom: 12px;
    }
  }
}

.is-dark {
  .collapse {
    @include vuero-card--dark;

    &[open] {
      .collapse-header {
        .collapse-icon {
          background: var(--dark-sidebar-light-2);
          border-color: var(--dark-sidebar-light-4) !important;
        }
      }
    }

    .collapse-header {
      h3 {
        color: var(--dark-dark-text);
      }

      .collapse-icon {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-6);
      }
    }
  }
}
</style>
