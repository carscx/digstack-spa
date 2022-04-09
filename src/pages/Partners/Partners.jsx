import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { UserStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import s from './partners.module.scss'

function Partners() {
  const [userStore] = useState(() => new UserStore())
  const { t } = useTranslation('menu')

  useEffect(() => {
    userStore.getUsers()
  }, [])

  return (
    <div className={s.partners}>
      {userStore?.users?.length > 0 ? (
        <LayoutCards type="users" data={userStore?.users} title={t('partners')} />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(Partners)
