import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { ProjectStore } from 'stores'
import LayoutCards from 'presentation/LayoutCards/LayoutCards'
import s from './projects.module.scss'

function Projects() {
  const [projectStore] = useState(() => new ProjectStore())

  useEffect(() => {
    projectStore.getProjects()
  }, [])

  return (
    <div className={s.projects}>
      {projectStore?.projects?.length > 0 ? (
        <LayoutCards data={projectStore?.projects} />
      ) : (
        <p>cargando...</p>
      )}
    </div>
  )
}

export default observer(Projects)
