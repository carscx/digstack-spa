import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import { string } from 'yup'
import AsyncStore from 'stores/AsyncStore'
import InputStore from 'stores/InputStore'

class LoginStore extends AsyncStore {
  constructor(authStore) {
    super()

    this.authStore = authStore
    this.email = new InputStore(string().email().required())
    this.password = new InputStore()
    this.isLoading = false
    this.redirectSocial = ''

    makeObservable(this, {
      redirectSocial: observable,
      // actions
      changeEmail: action,
      changePassword: action,
      login: action,
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

  changeRedirectSocial(url) {
    this.redirectSocial = url
  }

  async validate() {
    let isValid = true

    if (!(await this.email.validate())) {
      isValid = false
    }

    return isValid
  }

  clearErrors() {
    this.email.clearError()
    this.password.clearError()
  }

  async login() {
    this.clearErrors()

    const emailVal = this.email.value
    const passwordVal = this.password.value

    if (await this.validate()) {
      this.preRequest()

      try {
        await this.authStore.basicLogin(emailVal, passwordVal)

        runInAction(() => {
          this.onSuccessRequest()
        })
        return true
      } catch (e) {
        runInAction(() => {
          if (e.response?.status === 401) {
            this.email.setError(true)
            this.password.setError(true, e.response?.data?.message)
          }
          this.onErrorRequest(e)
        })

        return false
      }
    }

    return false
  }

  get canSubmit() {
    return this.email.value !== '' && this.password.value !== '' && !this.email.error
  }
}

export default LoginStore
