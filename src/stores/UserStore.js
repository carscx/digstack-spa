import { action, makeObservable, observable, runInAction } from 'mobx'
import AsyncStore from 'stores/AsyncStore'
import { UserService } from 'services'

class UserStore extends AsyncStore {
  constructor() {
    super()
    this.userService = new UserService()
    this.users = []

    makeObservable(this, {
      // observables
      users: observable,
      // actions
      changeUsers: action,
    })
  }

  changeUsers(users) {
    this.users = users
  }

  async getUsers() {
    this.preRequest()
    try {
      await this.userService.getUsers().then((data) => this.changeUsers(data.data))

      runInAction(() => {
        this.onSuccessRequest()
      })
      return true
    } catch (e) {
      runInAction(() => {
        this.onErrorRequest(e)
      })

      return false
    }
  }
}

export default UserStore
