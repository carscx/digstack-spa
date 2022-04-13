import { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import { DashboardStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import { NewsIcon, ProjectIcon, UsersIcon } from 'presentation/ui/Icons'
import s from './dashboard.module.scss'

function Dashboard() {
  const [dashboardStore] = useState(() => new DashboardStore())
  const { t } = useTranslation('menu')
  const { isLoading, lastPost, lastProject, lastUser } = dashboardStore
  useEffect(() => {
    dashboardStore.getLastItems()
  }, [])

  return (
    <div className={s.dashboard}>
      {!isLoading ? (
        <>
          <LayoutCards
            type="projects"
            data={lastProject}
            title={t('lastProjects')}
            iconTitle={<ProjectIcon />}
          />
          <LayoutCards type="news" data={lastPost} title={t('lastNews')} iconTitle={<NewsIcon />} />
          <LayoutCards
            type="users"
            data={lastUser}
            title={t('lastUsers')}
            iconTitle={<UsersIcon />}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(Dashboard)
