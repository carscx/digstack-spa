import c from 'classnames'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Greeting, Logo } from 'presentation'
import { Text } from 'presentation/ui'
import { LogoutIcon, MenuIcon, NewsIcon, ProjectIcon, UsersIcon } from 'presentation/ui/Icons'
import { HOME, LOGOUT, NEWS, PARTNERS, PROJECTS } from 'routes/paths'
import storeContext from 'providers/storeContext'
import useViewport from 'hooks/useViewport'
import s from './sidebar.module.scss'

function Sidebar() {
  const [isClosed, setIsClosed] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { authStore } = useContext(storeContext)
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
          <NavLink to={HOME}>
            <Logo full={!isClosed} />
          </NavLink>
        </div>
        <div className={s.sidebarActions}>
          <Greeting username={authStore?.authUser?.first_name} isClosed={isClosed} />
          <MenuIcon
            open={isClosed}
            showMenu={isMobileSize() ? !showMenu : showMenu}
            onClick={handleToggleSidebar}
          />
        </div>
        <ul className={c(s.sidebarNavUl, showMenu && s.sidebarNavUlMobile)}>
          <li className={s.sidebarNavUlLi}>
            <NavLink
              title={t('menu:projects')}
              className={c(s.navLink, (navData) => navData.isActive && s.navLinkActive)}
              to={PROJECTS}
            >
              <ProjectIcon className={s.navIcon} />{' '}
              <Text text={t('menu:projects')} className={s.navText} />
            </NavLink>
          </li>
          <li className={s.sidebarNavUlLi}>
            <NavLink
              title={t('menu:partners')}
              className={c(s.navLink, (navData) => navData.isActive && s.navLinkActive)}
              to={PARTNERS}
            >
              <UsersIcon className={s.navIcon} />{' '}
              <Text text={t('menu:partners')} className={s.navText} />
            </NavLink>
          </li>
          <li className={s.sidebarNavUlLi}>
            <NavLink
              title={t('menu:news')}
              className={c(s.navLink, (navData) => navData.isActive && s.navLinkActive)}
              to={NEWS}
            >
              <NewsIcon className={s.navIcon} />{' '}
              <Text text={t('menu:news')} className={s.navText} />
            </NavLink>
          </li>
          <li className={s.sidebarNavUlLi}>
            <NavLink title={t('auth:signOut')} className={s.navLink} to={LOGOUT}>
              <LogoutIcon className={s.navIcon} />{' '}
              <Text text={t('auth:signOut')} className={s.navText} />
            </NavLink>
          </li>
        </ul>
        <div className={s.footerSidebar}>
          <Text text={t('menu:poweredBy')} className={s.poweredBy} />
          <a
            href="https://digbang.com"
            title={`${t('menu:poweredBy')} DigBang`}
            rel="noopener noreferrer"
            target="_blank"
          >
            DigBang
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
