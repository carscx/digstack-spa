import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProjectStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import s from './projects.module.scss'

function Projects() {
  const [projectStore] = useState(() => new ProjectStore())
  const { t } = useTranslation('menu')
  useEffect(() => {
    projectStore.getProjects()
  }, [])

  return (
    <div className={s.projects}>
      {projectStore?.projects?.length > 0 ? (
        <LayoutCards type="projects" data={projectStore?.projects} title={t('projects')} />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(Projects)
