/* eslint-disable camelcase */
import { makeAutoObservable } from 'mobx'

class AuthUser {
  constructor(userId, role_id, username, email, last_activated_at, status, token) {
    this.token = token
    this.userId = userId
    this.role_id = role_id
    this.username = username
    this.email = email
    this.last_activated_at = last_activated_at
    this.status = status

    makeAutoObservable(this)
  }

  static fromJson({ user, access_token: token }) {
    return new AuthUser(
      user.id,
      user.role_id,
      user.username,
      user.email,
      user.last_actived_at,
      user.status,
      token
    )
  }

  static fromCookie(user) {
    return new AuthUser(
      user.userId,
      user.role_id,
      user.username,
      user.email,
      user.last_actived_at,
      user.status,
      user.token
    )
  }
}

export default AuthUser
