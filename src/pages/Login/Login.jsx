import { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import storeContext from 'providers/storeContext'
import LoginStore from 'stores/LoginStore'
import LayoutLogin from 'presentation/LayoutLogin'
// import { HOME } from 'routes/paths'
import { InputWrapper, Title, PasswordInput, Button } from 'presentation/ui'
import imgLogin from 'img/login-1.png'
import LogoFull from 'img/logo-full.png'
import s from './login.module.scss'

function Login() {
  const { t } = useTranslation('auth')
  const { authStore } = useContext(storeContext)
  const navigate = useNavigate()
  const [loginStore] = useState(() => new LoginStore(authStore))

  const handleChangeEmail = (e) => loginStore.changeEmail(e.target.value)
  const handleFocusEmail = () => null
  const handleBlurEmail = () => null

  const handleChangePassword = (e) => loginStore.changePassword(e.target.value)
  const handleFocusPassword = () => null
  const handleBlurPassword = () => console.log('aksjd')
  const handleSubmit = () => loginStore.login().then((success) => success && navigate('/'))

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
          <Title title={t('signIn')} />
          <InputWrapper
            inputStore={loginStore.email}
            onChange={handleChangeEmail}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            label={t('email')}
            type="email"
          />
          <PasswordInput
            className={s.passwordInput}
            inputStore={loginStore.password}
            onChange={handleChangePassword}
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            label={t('password')}
          />
          <Button
            disabled={!loginStore.canSubmit}
            isLoading={loginStore.isLoading}
            label={t('login')}
            type="submit"
            onClick={handleSubmit}
            fullWidth
          />
        </form>
      </div>
    </LayoutLogin>
  )
}

export default observer(Login)
