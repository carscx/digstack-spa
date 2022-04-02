import { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import storeContext from 'providers/storeContext'
import RegisterStore from 'stores/RegisterStore'
import LayoutLogin from 'presentation/LayoutLogin'
import { HOME, LOGIN } from 'routes/paths'
import { InputWrapper, Title, PasswordInput, Button } from 'presentation/ui'
import imgLogin from 'img/login-1.png'
import LogoFull from 'img/logo-full.png'
import s from './register.module.scss'

function Register() {
  const { t } = useTranslation('auth')
  const { authStore } = useContext(storeContext)
  const navigate = useNavigate()
  const [registerStore] = useState(() => new RegisterStore(authStore))

  const handleChangeEmail = (e) => registerStore.changeEmail(e.target.value)
  const handleFocusEmail = () => null
  const handleBlurEmail = () => null

  const handleChangePassword = (e) => registerStore.changePassword(e.target.value)
  const handleFocusPassword = () => null
  const handleBlurPassword = () => null

  const handleChangeUsername = (e) => registerStore.changeUsername(e.target.value)
  const handleFocusUsername = () => null
  const handleBlurUsername = () => null

  const handleSubmit = () => registerStore.register().then((success) => success && navigate(HOME))

  const { email, password, username, canSubmit, isLoading } = registerStore

  return (
    <LayoutLogin>
      <div className={s.brand}>
        <div className={s.brandTitle}>
          <img src={LogoFull} alt="LOGO" />
        </div>
        <div className={s.brandImg}>
          <img className={s.brandImgLogin} src={imgLogin} alt="LOGIN" />
        </div>
      </div>
      <div className={s.loginBox}>
        <form className={s.loginForm} onSubmit={handleSubmit}>
          <Title title={t('signUp')} />
          <InputWrapper
            inputStore={username}
            onChange={handleChangeUsername}
            onFocus={handleFocusUsername}
            onBlur={handleBlurUsername}
            label={t('username')}
            type="text"
          />
          <InputWrapper
            inputStore={email}
            onChange={handleChangeEmail}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            label={t('email')}
            type="email"
          />
          <PasswordInput
            className={s.passwordInput}
            inputStore={password}
            onChange={handleChangePassword}
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            label={t('password')}
          />
          <Button
            disabled={!canSubmit}
            isLoading={isLoading}
            label={t('signUp')}
            type="submit"
            onClick={handleSubmit}
            fullWidth
          />
          <Link to={LOGIN}>{t('signIn')}</Link>
        </form>
      </div>
    </LayoutLogin>
  )
}

export default observer(Register)
