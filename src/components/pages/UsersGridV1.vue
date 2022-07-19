<script setup lang="ts">
import { computed, ref } from 'vue'

import type { VAvatarProps, VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'
import { users } from '/@src/data/user-grid-v1'

const filters = ref('')

const filteredData = computed(() => {
  if (!filters.value) {
    return users.slice(0, 5)
  } else {
    return users.filter((item) => {
      return (
        item.username.match(new RegExp(filters.value, 'i')) ||
        item.location.match(new RegExp(filters.value, 'i')) ||
        item.position.match(new RegExp(filters.value, 'i')) ||
        item.badge.match(new RegExp(filters.value, 'i'))
      )
    }).splice(0, 5)
  }
})

const valueSingle = ref(0)
const optionsSingle = [
  'All',
  'UI/UX Design',
  'Web Development',
  'Software Eng.',
  'Business',
]
const files = ref([]);

function onFileUpload(event: any) {
  const target = event.target
  console.log('files: ', target.files);
  files.value.push(target.files[0]);
}

function onRemoveFile(id: any) {
  console.log('id on remove file: ', id);
  files.value = files.value.filter(file => file.lastModified !== id)
}

function getAvatarData(user: any): VAvatarProps {
  return {
    picture: user?.avatar,
    initials: user?.initials,
    color: user?.color as VAvatarColor,
  }
}
</script>

<template>
  <div class="container">
    <div class="company-header is-dark-card-bordered is-dark-bg-6">
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">5</span>
          <p>{{ $t('Total_voted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">3</span>
          <p>{{ $t('Accepted') }}</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <span class="dark-inverted">2</span>
          <p>{{ $t('rejected') }}</p>
        </div>
      </div>
    </div>

    <div class="user-grid user-grid-v1">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage :class="[filteredData.length !== 0 && 'is-hidden']"
        title="We couldn't find any matching results." subtitle="Too bad. Looks like we couldn't find any matching results for the
          search terms you've entered. Please try different search terms or
          criteria." larger>
      </VPlaceholderPage>

      <TransitionGroup name="list" tag="div" class="columns is-multiline">
        <!--Grid item-->
        <div v-for="item, itemIndex in filteredData" :key="item.id" class="column is-4">
          <div class="grid-item">
            <VAvatar :picture="item.avatar" size="xl" />
            <h3 class="dark-inverted">{{ item.fullName }}</h3>
            <p>{{ item.position }}</p>
            <!-- <div class="people">
              <VAvatar v-for="user in item.team" :key="user.id" size="small" v-bind="getAvatarData(user)" />
            </div> -->
            <div class="is-grouped mt-5">
              <VButton :color="itemIndex % 2 === 0 ? 'success' : 'light'" style="width: 40%;" class="mr-5">
                <span class="icon">
                  <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                </span>
                <span>{{ $t('Yes') }}</span>
              </VButton>
              <VButton :color="itemIndex % 2 !== 0 ? 'danger' : 'light'" style="width: 40%;">
                <span class="icon">
                  <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                </span>
                <span>{{ $t('No') }}</span>
              </VButton>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div class="columns is-multiline mt-5">
      <div class="column is-12">
        <VField :label="$t('conclusion_in_details') + '*'">
          <VControl>
            <VTextarea :placeholder="$t('Add_text')" :rows="2" />
          </VControl>
        </VField>
      </div>
      <div class="column is-12 is-flex">
        <div id="file-js-example" class="file has-name w-auto is-warning">
          <label class="file-label">
            <input class="file-input" type="file" @change="onFileUpload">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                {{ $t('Choose_a_file') }}…
              </span>
            </span>
          </label>
        </div>
        <div class="ml-auto">
          <VButton color="primary" raised @click="close()">{{ $t('Save_changes') }}</VButton>
        </div>
      </div>
      <div class="column is-12">
        <div class="is-divider my-1"></div>
        <div class="is-flex is-flex-direction-column">
          <div v-for="(file, fileIndex) in files" :key="fileIndex"
            class="is-flex is-align-items-center	mb-3 is-justify-content-space-between	">
            <span class="has-text-white mr-3">{{ file.name }}</span>
            <button class="button is-warning is-outlined is-rounded p-3" @click="onRemoveFile(file.lastModified)">
              <span class="iconify" data-icon="feather:x" />
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-dark {
  .user-grid {
    .grid-item {
      @include vuero-card--dark;
    }
  }
}

.user-grid-v1 {
  .columns {
    margin-left: -0.5rem !important;
    margin-right: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }

  .grid-item {
    @include vuero-s-card;

    text-align: center;

    >.v-avatar {
      display: block;
      margin: 0 auto 4px;
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.85rem;
    }

    .people {
      display: flex;
      justify-content: center;
      padding: 8px 0 30px;

      .v-avatar {
        margin: 0 4px;
      }
    }

    // .buttons {
    //   display: flex;
    //   justify-content: space-between;

    //   .button {
    //     width: calc(50% - 4px);
    //     color: var(--light-text);

    //     &:hover,
    //     &:focus {
    //       border-color: var(--fade-grey-dark-4);
    //       color: var(--primary);
    //       box-shadow: var(--light-box-shadow);
    //     }
    //   }
    // }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .user-grid-v1 {
    .columns {
      display: flex;

      .column {
        min-width: 50% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .user-grid-v1 {
    .columns {
      .column {
        min-width: 33.3% !important;
      }
    }
  }
}

.company-header {
  display: flex;
  padding: 20px;
  background: var(--white);
  border: 1px solid var(--fade-grey-dark-3);
  border-radius: var(--radius-large);
  margin: 1.5rem 0;

  .header-item {
    width: 33.33%;
    border-right: 1px solid var(--fade-grey-dark-3);

    &:last-child {
      border-right: none;
    }

    .item-inner {
      text-align: center;

      .lnil,
      .lnir {
        font-size: 1.8rem;
        margin-bottom: 6px;
        color: var(--primary);
      }

      span {
        display: block;
        font-family: var(--font);
        font-weight: 600;
        font-size: 1.6rem;
        color: var(--dark-text);
      }

      p {
        font-family: var(--font-alt);
        font-size: 0.95rem;
      }
    }
  }
}
</style>
