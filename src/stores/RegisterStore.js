import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import { string } from 'yup'
import i18next from 'i18next'
import AsyncStore from 'stores/AsyncStore'
import InputStore from 'stores/InputStore'

class RegisterStore extends AsyncStore {
  constructor(authStore) {
    super()

    this.authStore = authStore
    this.email = new InputStore(string().email().required())
    this.password = new InputStore()
    this.roleId = 2
    this.username = new InputStore(string().required())
    this.isLoading = false
    this.generalError = ''

    makeObservable(this, {
      generalError: observable,
      // actions
      changeEmail: action,
      changePassword: action,
      changeUsername: action,
      register: action,
      // computeds
      canSubmit: computed,
    })
  }

  changeEmail(email) {
    this.email.setValue(email.toLowerCase())
  }

  changePassword(password) {
    this.password.setValue(password)
  }

  changeUsername(username) {
    this.username.setValue(username)
  }

  async validate() {
    let isValid = true

    if (!(await this.email.validate())) {
      isValid = false
    }

    return isValid
  }

  clearErrors() {
    this.generalError = ''
    this.email.clearError()
    this.password.clearError()
    this.username.clearError()
  }

  async register() {
    this.clearErrors()

    const emailVal = this.email.value
    const passwordVal = this.password.value
    const usernameVal = this.username.value

    if (await this.validate()) {
      this.preRequest()

      try {
        await this.authStore.basicRegister(emailVal, passwordVal, usernameVal, this.roleId)

        runInAction(() => {
          this.onSuccessRequest()
        })
        return true
      } catch (e) {
        runInAction(() => {
          let displayError = false
          if (
            e.response?.data?.error?.code === 401 &&
            e.response?.data?.error?.fields !== undefined
          ) {
            displayError = this.processErrors(e.response?.data?.error?.fields)
          }

          if (!displayError) {
            this.generalError = i18next.t('auth:generalError')
          }

          this.onErrorRequest(e)
        })

        return false
      }
    }

    return false
  }

  processErrors(errors) {
    let displayError = false

    Object.keys(errors).forEach((errorKey) => {
      const [errorMessage] = errors[errorKey]

      switch (errorKey) {
        case 'password':
          this.password.setError(true, errorMessage)
          displayError = true
          break

        case 'email':
        default:
          this.email.setError(true, errorMessage)
          displayError = true
          break
      }
    })

    return displayError
  }

  get canSubmit() {
    return this.email.value !== '' && this.password.value !== '' && !this.email.error
  }
}

export default RegisterStore
