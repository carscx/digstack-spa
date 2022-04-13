import { action, makeObservable, observable, runInAction } from 'mobx'
import AsyncStore from 'stores/AsyncStore'
import { DashboardService } from 'services'

class DashboardStore extends AsyncStore {
  constructor() {
    super()
    this.dashboardService = new DashboardService()
    this.items = []
    this.lastPost = []
    this.lastProject = []
    this.lastUser = []

    makeObservable(this, {
      // observables
      items: observable,
      lastPost: observable,
      lastProject: observable,
      lastUser: observable,
      // actions
      changeItems: action,
      changeLastPost: action,
      changeLastProject: action,
      changeLastUser: action,
    })
  }

  changeItems(items) {
    this.items = items
  }

  changeLastPost(post) {
    this.lastPost = post
  }

  changeLastProject(project) {
    this.lastProject = project
  }

  changeLastUser(user) {
    this.lastUser = user
  }

  async getLastItems() {
    this.preRequest()
    try {
      await this.dashboardService.getLastItems().then((data) => {
        this.changeItems(data.data)
        this.changeLastPost(this.items?.lastPost)
        this.changeLastProject(this.items?.lastProject)
        this.changeLastUser(this.items?.lastUser)
      })

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

export default DashboardStore
