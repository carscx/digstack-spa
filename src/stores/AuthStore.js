import { observable, action, computed, makeObservable, runInAction } from 'mobx'
// import { HOME } from 'routes/paths'
import AuthService from '../services/AuthService'
import AsyncStore from './AsyncStore'

class AuthStore extends AsyncStore {
  authUser = null
  authService

  constructor() {
    super()

    this.makeObservables()

    this.isLoading = false
    this.authService = new AuthService()

    this.loadCurrentAuth()
  }

  async loadCurrentAuth() {
    this.preRequest()

    const authUser = await this.authService.loadCurrentAuth()

    if (authUser) {
      runInAction(() => {
        this.onSuccessRequest()
      })

      return this.authenticate(authUser)
    }

    // logs out user if token is missing
    // or if token is expired
    this.logout()

    this.onSuccessRequest()

    return null
  }

  async basicLogin(username, password, rememberMe = false) {
    await this.authService
      .login(username, password, rememberMe)
      .then((authUser) => this.authenticate(authUser))
  }

  async basicRegister(email, password, username, roleId) {
    await this.authService
      .register(email, password, username, roleId)
      .then((authUser) => this.authenticate(authUser))
  }

  authenticate(authUser) {
    this.authService.persistLoginData(authUser, true)
    this.updateAuthUser(authUser)
    return Promise.resolve()
  }

  updateAuthUser(authUser) {
    this.authUser = authUser
  }

  get isAuthenticated() {
    return this.authUser !== null && this.authUser.token !== null
  }

  async logout(cb = null) {
    try {
      if (this.authUser) {
        await this.authService.logout()
      }
    } catch (e) {
      // do nothing
    }

    runInAction(() => {
      this.authUser = null
    })

    if (cb) {
      cb()
    }
  }

  // eslint-disable-next-line class-methods-use-this
  get dashboardRoute() {
    // return HOME
    return ''
  }

  makeObservables() {
    makeObservable(this, {
      // observables
      authUser: observable,
      // actions
      loadCurrentAuth: action,
      basicLogin: action,
      updateAuthUser: action,
      logout: action,
      // computeds
      isAuthenticated: computed,
    })
  }
}

export default AuthStore
