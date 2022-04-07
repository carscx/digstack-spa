import c from 'classnames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Greeting, Logo } from 'presentation'
import { LogoutIcon, MenuIcon, ProjectIcon } from 'presentation/ui/Icons'
import { HOME, LOGOUT, PROJECTS } from 'routes/paths'
import useViewport from 'hooks/useViewport'
import s from './sidebar.module.scss'

function Sidebar() {
  const [isClosed, setIsClosed] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { width } = useViewport()
  const { t } = useTranslation(['auth', 'menu'])
  const isMobileSize = () => width < 768

  const handleToggleSidebar = () => {
    if (isMobileSize()) {
      setShowMenu(!showMenu)
    } else {
      setIsClosed(!isClosed)
    }
  }

  return (
    <div className={c(s.sidebar, isClosed && s.sidebarClosed)}>
      <nav className={s.sidebarNav}>
        <div className={s.logoSidebar}>
          <Link to={HOME}>
            <Logo full={!isClosed} />
          </Link>
        </div>
        <div className={s.sidebarActions}>
          <Greeting isClosed={isClosed} />
          <MenuIcon
            open={isClosed}
            showMenu={isMobileSize() ? !showMenu : showMenu}
            onClick={handleToggleSidebar}
          />
        </div>
        <ul className={c(s.sidebarNavUl, showMenu && s.sidebarNavUlMobile)}>
          <li className={s.sidebarNavUlLi}>
            <Link className={s.navLink} to={PROJECTS}>
              <ProjectIcon className={s.navIcon} />{' '}
              <span className={s.navText}>{t('menu:projects')}</span>
            </Link>
          </li>
          <li className={s.sidebarNavUlLi}>
            <Link className={s.navLink} to={LOGOUT}>
              <LogoutIcon className={s.navIcon} />{' '}
              <span className={s.navText}>{t('auth:signOut')}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
