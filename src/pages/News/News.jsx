import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { UserStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import s from './news.module.scss'

function News() {
  const [userStore] = useState(() => new UserStore())
  const { t } = useTranslation('menu')

  useEffect(() => {
    userStore.getUsers()
  }, [])

  return (
    <div className={s.news}>
      {userStore?.users?.length > 0 ? (
        <LayoutCards type="users" data={userStore?.users} title={t('news')} />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(News)
