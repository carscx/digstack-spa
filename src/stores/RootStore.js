import AuthService from '../services/AuthService'
import AuthStore from './AuthStore'

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this)
    this.authService = new AuthService()
  }
}

export default RootStore
