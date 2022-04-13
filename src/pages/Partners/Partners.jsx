import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { UserStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import { UsersIcon } from 'presentation/ui/Icons'
import s from './partners.module.scss'

function Partners() {
  const [userStore] = useState(() => new UserStore())
  const { isLoading } = userStore
  const { t } = useTranslation('menu')

  useEffect(() => {
    userStore.getUsers()
  }, [])

  return (
    <div className={s.partners}>
      {!isLoading ? (
        <LayoutCards
          type="users"
          data={userStore?.users}
          title={t('partners')}
          iconTitle={<UsersIcon />}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(Partners)
