import { observable, computed, action, makeObservable } from 'mobx'

class AsyncStore {
  isLoading = true
  errors = []

  constructor() {
    this.isLoading = true
    this.errors = []

    makeObservable(this, {
      // observables
      isLoading: observable,
      errors: observable,
      // actions
      preRequest: action,
      onSuccessRequest: action,
      onErrorRequest: action,
      // computeds
      hasErrors: computed,
    })
  }

  preRequest() {
    this.isLoading = true
    this.errors = []
  }

  onSuccessRequest() {
    this.isLoading = false
  }

  onErrorRequest(error) {
    this.isLoading = false
    this.errors.push(error)
  }

  get hasErrors() {
    return !!this.errors.length
  }
}

export default AsyncStore
