import { useContext, useState } from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import storeContext from 'providers/storeContext'
import { LoginStore } from 'stores'
import { LayoutLogin, Logo } from 'presentation'
import { InputWrapper, Title, Text, PasswordInput, Button } from 'presentation/ui'
import { AnimationBg } from 'presentation/ui/Icons'
import imgLogin from 'img/login-2.png'
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
  const handleBlurPassword = () => null
  const handleSubmit = () =>
    loginStore.login().then((success) => success && navigate('/', { replace: true }))

  return (
    <LayoutLogin>
      <div className={s.brand}>
        <div className={s.brandTitle}>
          <Logo full />
        </div>
        <div className={s.brandImg}>
          <img className={s.brandImgLogin} src={imgLogin} alt="LOGIN" />
        </div>
        <AnimationBg className={s.bgAnimated} />
      </div>
      <div className={s.loginBox}>
        <form className={s.loginForm} onSubmit={handleSubmit}>
          <Title title={t('welcome')} className={s.title} />
          <Text text={t('loginLegend')} className={s.text} />
          <InputWrapper
            autoFocus
            inputStore={loginStore.email}
            onChange={handleChangeEmail}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            placeholder={t('emailPlaceholder')}
            type="email"
          />
          <PasswordInput
            className={s.passwordInput}
            inputStore={loginStore.password}
            onChange={handleChangePassword}
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            placeholder={t('passwordPlaceholder')}
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
