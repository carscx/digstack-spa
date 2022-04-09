import { action, makeObservable, observable, runInAction } from 'mobx'
import AsyncStore from 'stores/AsyncStore'
import { ProjectService } from 'services'

class ProjectStore extends AsyncStore {
  constructor() {
    super()
    this.projectService = new ProjectService()
    this.projects = []

    makeObservable(this, {
      // observables
      projects: observable,
      // actions
      changeProjects: action,
    })
  }

  changeProjects(projects) {
    this.projects = projects
  }

  async getProjects() {
    this.preRequest()
    try {
      await this.projectService.getProjects().then((data) => this.changeProjects(data.data))

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

export default ProjectStore
