<script setup lang="ts">
import type { VTagColor } from '/@src/components/base/tags/VTag.vue'
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { reactive, ref } from 'vue'

export interface UserData extends VAvatarProps {
  name: string
  location: string
  role: string
  roleColor: VTagColor
  medias: {
    avatar: string
    flag: string
  }
  stats: {
    projects: number
    replies: number
    posts: number
  }
  teams: VAvatarProps[]
}

const contract = {
  title: 'shartnoma_00013_15_08_2022',
  created_at: '15-08-2022',
  price: 1500000,
}
const isContractEditModalOpen = ref(false);

function openContractEditModal() {
  isContractEditModalOpen.value = true
}
</script>

<template>
  <div>
    <div class="page-content-inner">
      <!--List-->
      <div class="list-view list-view-v1">
        <div class="list-view-inner" style="width: 100%;">
          <!--Item-->
          <TransitionGroup name=" list-complete" tag="div">
            <div class="list-view-item" key="contract_info">
              <div class="list-view-item-inner">
                <div class="meta-left">
                  <VButton class="is-flex" outlined>
                    <span>{{ contract.title }}</span>
                    <i class="fas fa-download ml-3"></i>
                  </VButton>
                </div>
                <div class="meta-right">
                  <div class="stats">
                    <div class="stat">
                      <span>{{ contract.created_at }}</span>
                      <span>{{ $t('Created_at') }}</span>
                    </div>
                    <div class="separator"></div>
                    <div class="stat mr-5">
                      <span>{{ contract.price }}</span>
                      <span>{{ $t('Price') }}</span>
                    </div>
                    <VButton color="info" class="mr-5" icon="fas fa-upload" @click.prevent="openContractEditModal">{{
                        $t('Upload_contract')
                    }}</VButton>
                    <VButton color="primary" icon="fas fa-check">{{ $t('Verify') }}</VButton>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
    <ContractEditModal v-model="isContractEditModalOpen" />
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.list-view-v1 {
  width: 100%;

  .list-view-item {
    width: 100%;
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      .meta-left {
        width: 100%;
        margin-left: 16px;

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1rem;
          line-height: 1;
        }

        >span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            height: 12px;
            width: 12px;
          }
        }
      }

      .meta-right {
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .tags {
          margin-right: 30px;
          margin-bottom: 0;

          .tag {
            margin-bottom: 0;
          }
        }

        .stats {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-right: 30px;

          .stat {
            display: flex;
            align-items: center;
            flex-direction: column;
            text-align: center;
            color: var(--light-text);

            >span {
              font-family: var(--font);

              &:first-child {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--dark-text);
                line-height: 1.4;
              }

              &:nth-child(2) {
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
              }
            }

            svg {
              height: 16px;
              width: 16px;
            }

            i {
              font-size: 1.4rem;
            }
          }

          .separator {
            height: 25px;
            width: 2px;
            border-right: 1px solid var(--fade-grey-dark-3);
            margin: 0 16px;
          }
        }

        .network {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          min-width: 145px;

          >span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
            margin-left: 6px;
          }
        }

        .dropdown {
          margin-left: 30px;
        }
      }
    }
  }
}

.is-dark {
  .list-view-v1 {
    .list-view-item {
      width: 100%;
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .stats {
            .stat {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }

            .separator {
              border-color: var(--dark-sidebar-light-16) !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .list-view-v1 {
    .list-view-item {
      width: 100%;

      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-left: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-left: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            >span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            right: 0;
            margin-left: 0;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .list-view-v1 {
    display: flex;
    flex-wrap: wrap;

    .list-view-item {
      width: 100%;
      // margin: 10px;
      width: calc(50% - 20px);

      .list-view-item-inner {
        position: relative;
        flex-direction: column;

        .v-avatar {
          margin-bottom: 10px;
        }

        .meta-left {
          margin-left: 0;
        }

        .meta-right {
          flex-direction: column;
          margin-left: 0;

          .tags {
            margin: 10px 0;
          }

          .stats {
            margin: 10px 0;
          }

          .network {
            margin: 10px 0 0;
            justify-content: center;

            >span {
              display: none;
            }
          }

          .dropdown {
            position: absolute;
            top: 0;
            right: 0;
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
