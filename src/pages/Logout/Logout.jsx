import { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { HOME } from 'routes/paths'
import StoreContext from 'providers/storeContext'
import { Title } from 'presentation/ui'
import s from './logout.module.scss'

function Logout() {
  const { authStore } = useContext(StoreContext)
  const { t } = useTranslation('auth')
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      authStore.logout(() => navigate(HOME))
    }, 200)
  }, [])

  return (
    <div className={s.logout}>
      <Title title={t('comingOut')} />
    </div>
  )
}

export default observer(Logout)
