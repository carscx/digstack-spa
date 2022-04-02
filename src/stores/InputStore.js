import { makeAutoObservable } from 'mobx'
import { object } from 'yup'

export default class InputStore {
  constructor(validationSchema = null) {
    this.value = ''
    this.error = false
    this.errorMessage = ''
    this.validationSchema = validationSchema
      ? object().shape({
          value: validationSchema,
        })
      : null

    makeAutoObservable(this)
  }

  setValue(value) {
    this.value = value || ''
    this.clearError()
  }

  async validate() {
    this.clearError()

    if (this.validationSchema !== null) {
      try {
        await this.validationSchema.validate({ value: this.value })

        return true
      } catch (e) {
        const [error] = e.errors

        this.setError(true, error)

        return false
      }
    }

    return true
  }

  setError(error, msg = '') {
    this.error = error
    this.errorMessage = msg
  }

  clearError() {
    this.setError(false)
  }
}
