/* eslint-disable class-methods-use-this */
import axios from 'axios'
import Cookies from 'js-cookie'
import API_URL from 'services/config'
import AuthUser from 'models/AuthUser'

const { CancelToken } = axios

class AuthService {
  getAuthUserFromJson = (data) => AuthUser.fromJson(data)

  getSessionId = () => Cookies.get('userId')

  persistLoginData = (authUser) => {
    const options = {}
    options.expires = 365
    Cookies.set('authUser', JSON.stringify(authUser), options)
  }

  getAuthUserFromCookie = (data) => AuthUser.fromCookie(data)

  getStoredLoginData = () => Cookies.get('authUser')

  removePersistedData = () => {
    Cookies.remove('riskGroupId')
    Cookies.remove('authUser')
  }

  login = (email, password) => {
    if (this.call) {
      this.call.cancel('Only one request allowed at a time.')
    }

    this.call = CancelToken.source()

    return axios
      .post(
        `${API_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          cancelToken: this.call.token,
        }
      )
      .then(({ data }) => {
        const authUser = this.getAuthUserFromJson(data.data)
        this.persistLoginData(authUser)

        return authUser
      })
  }

  register = (email, password, username, roleId) => {
    if (this.call) {
      this.call.cancel('Only one request allowed at a time.')
    }

    this.call = CancelToken.source()

    return axios
      .post(
        `${API_URL}/auth/register`,
        {
          email,
          password,
          username,
          role_id: roleId,
        },
        {
          cancelToken: this.call.token,
        }
      )
      .then(({ data }) => {
        const authUser = this.getAuthUserFromJson(data)

        this.persistLoginData(authUser)

        return authUser
      })
  }

  loadCurrentAuth = () => {
    const authUser = this.getStoredLoginData()

    if (authUser) {
      return this.getAuthUserFromCookie(JSON.parse(authUser))
    }

    return null
  }

  logout = () => {
    if (this.call) {
      this.call.cancel('Only one request allowed at a time.')
    }

    this.call = CancelToken.source()

    return axios
      .post(`${API_URL}/logout`, {
        cancelToken: this.call.token,
      })
      .then(() => {
        this.removePersistedData()
      })
      .catch(() => {
        this.removePersistedData()
      })
  }
}

export default AuthService
