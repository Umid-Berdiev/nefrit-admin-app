<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router';
import moment from 'moment';
import { fetchById, unblockApplicant, updateApplicant, verifyApplicant } from '/@src/utils/api/applicant';
import { ApplicantData } from '/@src/utils/interfaces';
import { useMainStore } from '/@src/stores';
import CountrySelect from './selects/CountrySelect.vue';
import { useNotyf } from '/@src/composable/useNotyf';
import ApplicantBlockFormModal from '../base/modal/ApplicantBlockFormModal.vue';

const { t, locale } = useI18n()
const route = useRoute()
const mainStore = useMainStore()
const currentId = (route.params?.id as string) ?? ''
const applicantData = reactive<ApplicantData>({})
const isFirstBlockEditable = ref(false)
const isSecondBlockEditable = ref(false)
const errors = reactive({
  boss_name: '',
  phone: '',
  fax: '',
  website: '',
  email: '',
  name: '',
  country: '',
  address: '',
  is_national: ''
})
const isLoading = ref(false)
const notif = useNotyf()
const isBlockFormModalOpen = ref(false)
const callbackFunc = ref(Function)

onMounted(async () => {
  await fetchData()
})

async function fetchData() {
  const res = await fetchById(Number(currentId))
  Object.assign(applicantData, res)
}

async function onFirstFormSubmit(event: Event) {
  try {
    isLoading.value = true
    const res = await updateApplicant(Number(currentId), applicantData)
    Object.assign(applicantData, res)
    isFirstBlockEditable.value = false
    notif.dismissAll()
    notif.success(t('Updated_successfully'))
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function onSecondFormSubmit(event: Event) {
  try {
    isLoading.value = true
    const res = await updateApplicant(Number(currentId), applicantData)
    Object.assign(applicantData, res)
    isSecondBlockEditable.value = false
    notif.dismissAll()
    notif.success(t('Updated_successfully'))
  } catch (error: any) {
    Object.assign(errors, error.response?.data?.errors)
  } finally {
    isLoading.value = false
  }
}

async function onConfirmAction() {
  await callbackFunc.value(Number(currentId))
  await fetchData()
}

async function onVerifyAction() {
  callbackFunc.value = verifyApplicant
  mainStore.$patch({ confirmModalState: true, confirmModalOkButtonColor: 'success' })
}

function toggleFirstBlock() {
  isFirstBlockEditable.value = !isFirstBlockEditable.value
}

function toggleSecondBlock() {
  isSecondBlockEditable.value = !isSecondBlockEditable.value
}

function clearErrors(event: Event) {
  errors[event.target.name] = ''
}

function onBlockAction() {
  isBlockFormModalOpen.value = true
}

async function onUnblockAction() {
  callbackFunc.value = unblockApplicant
  mainStore.$patch({ confirmModalState: true, confirmModalOkButtonColor: 'success' })
}
</script>

<template>
  <div>
    <div class="form-layout is-separate">
      <VBlock title="" center>
        <template #action>
          <VButton v-if="!applicantData.blocked_at" type="button" class="mr-3" outlined color="danger" icon="fas fa-ban"
            @click="onBlockAction">
            {{ $t('Block') }}
          </VButton>
          <VButton v-if="applicantData.blocked_at" type="button" class="mr-3" outlined color="warning" icon="fas fa-ban"
            @click="onUnblockAction">
            {{ $t('Unblock') }}
          </VButton>
          <VButton v-if="!applicantData.verified_at" type="button" class="mr-3" outlined color="primary"
            icon="fas fa-check-double" @click="onVerifyAction">
            {{ $t('Verify') }}
          </VButton>
          <!-- <VButton class="mr-3" outlined color="success" icon="fas fa-user-edit" type="submit">
            {{ $t('Save_changes') }}
          </VButton> -->
        </template>
      </VBlock>
      <div class="form-outer">
        <div class="form-body">
          <form id="first-block-form" class="form-section" @submit.prevent="onFirstFormSubmit">
            <div class="form-section-inner has-padding-bottom">
              <h3 class="has-text-centered">
                {{ t('Applicant_details') }}
                <a href="javascript:;" @click="toggleFirstBlock" class="edit-btn ml-5">
                  <VueIconify v-if="!isFirstBlockEditable" icon="feather:edit-2" />
                  <VueIconify v-else icon="feather:x" />
                </a>
              </h3>
              <div class="columns is-multiline">
                <!-- <div class="column is-12 mb-3">
                  <VField>
                    <VLabel>{{ t('Applicant_username') }}</VLabel>
                    <VControl icon="feather:user">
                      <VInput :disabled="!isFirstBlockEditable" type="text" name="username"
                        v-model="applicantData.username" autocomplete="applicant-name" />
                    </VControl>
                  </VField>
                </div> -->
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Boss_name')">
                    <VControl icon="feather:user">
                      <VInput :disabled="!isFirstBlockEditable" type="text" name="boss_name"
                        v-model="applicantData.boss_name" placeholder="" autocomplete="boss-name" />
                      <p class="help has-text-danger">{{ errors.boss_name[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Applicant_phone_number')">
                    <VControl icon="feather:phone" required>
                      <VInput :disabled="!isFirstBlockEditable" type="tel" name="phone" v-model="applicantData.phone"
                        autocomplete="applicant-name" />
                      <p class="help has-text-danger">{{ errors.phone[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Website')">
                    <VControl icon="feather:globe" required>
                      <VInput :disabled="!isFirstBlockEditable" type="text" name="website"
                        v-model="applicantData.website" autocomplete="website-name" />
                      <p class="help has-text-danger">{{ errors.website[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Email_address')">
                    <VControl icon="feather:mail" required>
                      <VInput :disabled="!isFirstBlockEditable" type="email" name="email" v-model="applicantData.email"
                        autocomplete="email" inputmode="email" />
                      <p class="help has-text-danger">{{ errors.email[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12 is-flex">
                  <VButton :loading="isLoading" v-if="isFirstBlockEditable" class="ml-auto" outlined color="success"
                    icon="fas fa-save" type="submit" form="first-block-form" :disabled="isLoading">
                    {{ $t('Save') }}
                  </VButton>
                </div>
              </div>
            </div>
          </form>
          <form id="second-block-form" class="form-section" @submit.prevent="onSecondFormSubmit">
            <div class="form-section-inner has-padding-bottom">
              <h3 class="has-text-centered">
                {{ t('Company_information') }}
                <a href="javascript:;" @click="toggleSecondBlock" class="edit-btn ml-5">
                  <VueIconify v-if="!isSecondBlockEditable" icon="feather:edit-2" />
                  <VueIconify v-else icon="feather:x" />
                </a>
              </h3>
              <div class="columns is-multiline">
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Company_name')">
                    <VControl icon="feather:briefcase" required>
                      <VInput :disabled="!isSecondBlockEditable" v-model="applicantData.name"
                        autocomplete="company_name" />
                      <p class="help has-text-danger">{{ errors.name[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <!-- <div class="column is-6 mb-3">
                  <VField>
                    <VLabel>{{ t('Company_phone') }} <span class="has-text-danger">*</span></VLabel>
                    <VControl icon="feather:phone">
                      <VInput :disabled="!isSecondBlockEditable" type="tel" v-model="applicantData.phone"
                        autocomplete="tel" inputmode="tel" />
                    </VControl>
                  </VField>
                </div> -->
                <div class="column is-6 mb-3">
                  <VField :label="$t('Company_fax')">
                    <VControl icon="feather:printer" required>
                      <VInput :disabled="!isSecondBlockEditable" v-model="applicantData.fax" autocomplete="tel"
                        inputmode="tel" />
                      <p class="help has-text-danger">{{ errors.fax[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6 mb-3">
                  <CountrySelect :disabled="!isSecondBlockEditable" v-model="applicantData.country_id" required />
                </div>
                <div class="column is-6 mb-3">
                  <VField :label="$t('stir')">
                    <VControl icon="fas fa-hashtag">
                      <VInput disabled :value="applicantData.inn" />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12 mb-3">
                  <VField required :label="$t('Address')">
                    <VControl>
                      <VTextarea v-model="applicantData.address" :rows="2" />
                      <p class="help has-text-danger">{{ errors.address[0] }}</p>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <!-- <label for="checkbox-is-national" class="checkbox">
                    <input :disabled="!isSecondBlockEditable" id="checkbox-is-national" type="checkbox"
                      v-model="applicantData.is_national" :checked="applicantData.is_national" />
                    {{ $t('isNational') }}
                  </label> -->
                  <VControl raw subcontrol>
                    <VCheckbox class="pl-1" v-model="applicantData.is_national" :label="$t('isNational')"
                      color="primary" :true-value="1" :false-value="0" :disabled="!isSecondBlockEditable" />
                  </VControl>
                </div>
                <div class="column is-12 is-flex">
                  <VButton :loading="isLoading" v-if="isSecondBlockEditable" class="ml-auto" outlined color="success"
                    icon="fas fa-save" type="submit" form="second-block-form" :disabled="isLoading">
                    {{ $t('Save') }}
                  </VButton>
                </div>
              </div>
            </div>
          </form>
          <div class="form-section">
            <div class="form-section-inner has-padding-bottom">
              <h3 class="has-text-centered">{{ t('Applicant_status') }}</h3>
              <div class="columns is-multiline">
                <div class="column is-12 mb-3">
                  <table class="table is-hoverable is-bordered is-fullwidth">
                    <tbody>
                      <tr v-if="applicantData.status">
                        <td class="has-text-weight-bold">
                          <div class="name dark-inverted">{{ $t('Status') }}</div>
                        </td>
                        <td>
                          <VTag :color="applicantData.status.color" rounded v-text="applicantData.status?.name" />
                        </td>
                      </tr>
                      <tr v-if="applicantData.verified_at">
                        <td class="has-text-weight-bold">
                          <div class="name dark-inverted">{{ $t('verified_at') }}</div>
                        </td>
                        <td>
                          <span class="has-text-primary is-size-6"
                            v-text="$h.formatDate(applicantData.verified_at, 'DD.MM.YYYY')" />
                        </td>
                      </tr>
                      <tr v-if="applicantData.block_reason">
                        <td class="has-text-weight-bold">
                          <div class="name dark-inverted">{{ $t('block_reason') }}</div>
                        </td>
                        <td>
                          <span color="danger is-size-6" v-text="applicantData.block_reason" />
                        </td>
                      </tr>
                      <tr v-if="applicantData.blocked_at">
                        <td class="has-text-weight-bold">
                          <div class="name dark-inverted">{{ $t('blocked_at') }}</div>
                        </td>
                        <td>
                          <span class="has-text-danger is-size-6"
                            v-text="$h.formatDate(applicantData.blocked_at, 'DD.MM.YYYY')" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ConfirmActionModal @confirm-action="onConfirmAction" />
    <ApplicantBlockFormModal v-model="isBlockFormModalOpen" :item-id="Number(currentId)" @update:list="fetchData" />
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  // max-width: 740px;
  margin: 0 auto;

  &.is-separate {
    // max-width: 1040px;

    .form-outer {
      background: none;
      border: none;

      .form-body {
        display: flex;

        .form-section {
          flex-grow: 2;
          padding: 10px;
          width: 50%;

          .form-section-inner {
            @include vuero-s-card;

            padding: 40px;

            &.has-padding-bottom {
              padding-bottom: 60px;
              height: 100%;
            }

            >h3 {
              font-family: var(--font-alt);
              font-size: 1.2rem;
              font-weight: 600;
              color: var(--dark-text);
              margin-bottom: 30px;
            }

            .columns {
              .column {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
              }
            }

            .radio-boxes {
              display: flex;
              justify-content: space-between;
              margin-left: -8px;
              margin-right: -8px;

              .radio-box {
                position: relative;
                width: calc(50% - 16px);
                margin: 8px;

                &:focus-within {
                  border-radius: 3px;
                  outline-offset: var(--accessibility-focus-outline-offset);
                  outline-width: var(--accessibility-focus-outline-width);
                  outline-style: var(--accessibility-focus-outline-style);
                  outline-color: var(--primary);
                }

                input {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  opacity: 0;
                  cursor: pointer;

                  &:checked {
                    +.radio-box-inner {
                      background: var(--primary);
                      border-color: var(--primary);
                      box-shadow: var(--primary-box-shadow);

                      .fee,
                      p {
                        color: var(--smoke-white);
                      }
                    }
                  }
                }

                .radio-box-inner {
                  background: var(--white);
                  border: 1px solid var(--fade-grey-dark-3);
                  text-align: center;
                  border-radius: var(--radius);
                  font-family: var(--font);
                  font-weight: 600;
                  font-size: 0.9rem;
                  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                    height 0.3s, width 0.3s;
                  padding: 30px 20px;

                  .fee {
                    font-family: var(--font);
                    font-weight: 700;
                    color: var(--dark-text);
                    font-size: 2.4rem;
                    line-height: 1;

                    span {
                      &::after {
                        content: '$';
                        position: relative;
                        top: -10px;
                        font-size: 1.5rem;
                      }
                    }
                  }

                  p {
                    font-family: var(--font-alt);
                  }
                }
              }
            }

            .control {
              >p {
                padding-top: 12px;

                >span {
                  display: block;
                  font-size: 0.9rem;

                  span {
                    font-weight: 500;
                    color: var(--dark-text);
                  }
                }
              }
            }
          }

          .form-section-outer {
            .checkboxes {
              padding: 16px 0;

              .checkbox {
                padding: 0;
                font-size: 0.9rem;
              }
            }

            .button-wrap {
              .button {
                min-height: 60px;
                font-size: 1.05rem;
                font-weight: 600;
                font-family: var(--font-alt);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .form-layout {
    &.is-separate {
      .form-outer {
        background: none !important;

        .form-body {
          .form-section {
            .form-section-inner {
              @include vuero-card--dark;

              >h3 {
                color: var(--dark-dark-text);
              }

              .radio-boxes {
                .radio-box {
                  input:checked+.radio-box-inner {
                    background: var(--primary);
                    border-color: var(--primary);
                    box-shadow: var(--primary-box-shadow);

                    .fee,
                    p {
                      color: var(--smoke-white);
                    }
                  }

                  .radio-box-inner {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12);

                    .fee {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .edit-btn {
    color: antiquewhite;
  }

  .edit-btn:hover {
    color: cornflowerblue;
  }

  .checkbox:hover {
    color: var(--dark-text);
  }
}

@media only screen and (max-width: 767px) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-left: 0;
          padding-right: 0;
          flex-direction: column;

          .form-section {
            width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-left: 0;
          padding-right: 0;

          // flex-direction: column;

          .form-section {
            // width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
