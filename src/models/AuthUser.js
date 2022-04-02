import { makeAutoObservable } from 'mobx'

class AuthUser {
  constructor(userId, roleId, username, email, lastActivatedAt, status, token) {
    this.token = token
    this.userId = userId
    this.roleId = roleId
    this.username = username
    this.email = email
    this.lastActivatedAt = lastActivatedAt
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

  static fromJsonRegister({ accessToken: token }) {
    return new AuthUser(null, null, null, null, token)
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
