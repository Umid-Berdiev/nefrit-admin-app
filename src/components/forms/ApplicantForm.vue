<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import moment from 'moment';
import { users } from '/@src/stores/usersMockData'

import VSelect from '/@src/components/base/form/VSelect.vue'
import VCheckbox from '/@src/components/base/form/VCheckbox.vue'
import VTextarea from '/@src/components/base/form/VTextarea.vue'

const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const selectedCountry = ref('')
const isNational = ref(false)
const date = ref(new Date())
const blockedAt = ref(new Date())
const selectedUser = ref({})

const { t } = useI18n()
const { y } = useWindowScroll()

onMounted(() => {
  selectedUser.value = users[0]
})

const isStuck = computed(() => {
  return y.value > 30
})

const onSubmit = () => {
  console.log('Form submitted!')
}

function formatDate(value: Date) {
  return moment(value).format('YYYY-MM-DD');
}


</script>

<template>
  <form class="form-layout is-separate" @submit.prevent="onSubmit">
    <VBlock title="" center>
      <template #action>
        <VButton class="mr-3" outlined color="success" icon="fas fa-user-edit" type="submit">
          {{ $t('Save_changes') }}
        </VButton>
      </template>
    </VBlock>
    <div class="form-outer">
      <div class="form-body">
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">{{ t('User_information') }}</h3>
            <div class="columns is-multiline">
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Applicant_user_name') }}</VLabel>
                  <VControl icon="feather:user">
                    <VInput type="text" :value="selectedUser.name" disabled autocomplete="applicant-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>Arizachini telefon raqami</VLabel>
                  <VControl icon="feather:phone">
                    <VInput type="tel" :value="selectedUser.phone" disabled autocomplete="applicant-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Boss_name') }}</VLabel>
                  <VControl icon="feather:user">
                    <VInput type="text" :value="selectedUser.shortname" placeholder="" autocomplete="boss-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>Websayt (agar mavjud bo'lsa)</VLabel>
                  <VControl icon="feather:globe">
                    <VInput type="text" value="nefrit.uz" autocomplete="website-name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Email_address') }}</VLabel>
                  <VControl icon="feather:mail">
                    <VInput type="email" value="info@nefrit.uz" autocomplete="email" inputmode="email" />
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">{{ t('Company_information') }}</h3>
            <div class="columns is-multiline">
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Company_name') }} <span class="has-text-danger">*</span></VLabel>
                  <VControl icon="feather:briefcase">
                    <VInput type="text" :value="selectedUser.company" placeholder="" autocomplete="company_name" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6 mb-3">
                <VField>
                  <VLabel>{{ t('Company_phone') }} <span class="has-text-danger">*</span></VLabel>
                  <VControl icon="feather:phone">
                    <VInput type="tel" :value="selectedUser.phone" placeholder="" autocomplete="tel" inputmode="tel" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6 mb-3">
                <VField>
                  <VLabel>{{ t('Company_fax') }} <span class="has-text-danger">*</span></VLabel>
                  <VControl icon="feather:printer">
                    <VInput type="tel" :value="selectedUser.phone" placeholder="" autocomplete="tel" inputmode="tel" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6 mb-3">
                <VField>
                  <VLabel>{{ t('Country') }}</VLabel>
                  <VControl class="has-icons-left" icon="fas fa-globe">
                    <VSelect v-model="selectedCountry">
                      <VOption value="" disabled>Select a Hero</VOption>
                      <VOption value="Superman">Superman</VOption>
                      <VOption value="Batman">Batman</VOption>
                      <VOption value="Spiderman">Spiderman</VOption>
                      <VOption value="Deadpool">Deadpool</VOption>
                      <VOption value="Spawn">Spawn</VOption>
                      <VOption value="Galactus">Galactus</VOption>
                    </VSelect>
                  </VControl>
                </VField>
              </div>
              <div class="column is-6 mb-3">
                <VField>
                  <VLabel>{{ t('stir') }}</VLabel>
                  <VControl icon="fas fa-hashtag">
                    <VInput type="text" :placeholder="t('STIR')" autocomplete="stir" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Address') }}</VLabel>
                  <VControl>
                    <VTextarea class="textarea" rows="2" autocomplete="off" autocapitalize="off" spellcheck="true" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <VControl>
                    <VCheckbox v-model="isNational" :label="t('isNational')" />
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">{{ t('Applicant_status') }}</h3>
            <div class="columns is-multiline">
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('Status') }}</VLabel>
                  <VControl class="has-icons-left" icon="feather:layers">
                    <VSelect v-model="selectedCountry">
                      <VOption value="" disabled>{{ t('Select') }} ...</VOption>
                      <VOption value="Superman">Superman</VOption>
                      <VOption value="Batman">Batman</VOption>
                      <VOption value="Spiderman">Spiderman</VOption>
                      <VOption value="Deadpool">Deadpool</VOption>
                      <VOption value="Spawn">Spawn</VOption>
                      <VOption value="Galactus">Galactus</VOption>
                    </VSelect>
                  </VControl>
                </VField>
              </div>
              <div class="column is-desktop-6 mb-3">
                <VField>
                  <VLabel>{{ t('verified_at') }}</VLabel>
                  <VControl>
                    <VInput disabled value="2022-06-23" type="date" :value="formatDate(date)"
                      class="input form-datepicker" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-desktop-6 mb-3">
                <VField>
                  <VLabel>{{ t('blocked_at') }}</VLabel>
                  <VControl>
                    <VInput disabled value="2022-06-27" type="date" :value="formatDate(blockedAt)"
                      class="input form-datepicker" />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12 mb-3">
                <VField>
                  <VLabel>{{ t('block_reason') }}</VLabel>
                  <VControl>
                    <VTextarea disabled class="textarea" rows="2" autocomplete="off" autocapitalize="off"
                      spellcheck="true" />
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
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
