import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import { ProjectIcon } from 'presentation/ui/Icons'
import s from './projects.module.scss'

function Projects() {
  const [projectStore] = useState(() => new ProjectStore())
  const { isLoading } = projectStore
  const { t } = useTranslation('menu')
  useEffect(() => {
    projectStore.getProjects()
  }, [])

  return (
    <div className={s.projects}>
      {!isLoading ? (
        <LayoutCards
          type="projects"
          data={projectStore?.projects}
          title={t('projects')}
          iconTitle={<ProjectIcon />}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(Projects)
