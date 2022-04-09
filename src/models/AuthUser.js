/* eslint-disable camelcase */
import { makeAutoObservable } from 'mobx'

class AuthUser {
  constructor(
    userId,
    role_id,
    username,
    first_name,
    last_name,
    image_path,
    email,
    last_activated_at,
    status,
    token
  ) {
    this.token = token
    this.userId = userId
    this.role_id = role_id
    this.username = username
    this.first_name = first_name
    this.last_name = last_name
    this.image_path = image_path
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
      user.first_name,
      user.last_name,
      user.image_path,
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
      user.first_name,
      user.last_name,
      user.image_path,
      user.email,
      user.last_actived_at,
      user.status,
      user.token
    )
  }
}

export default AuthUser
