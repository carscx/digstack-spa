import { PropTypes } from 'prop-types'
import c from 'classnames'
import useViewport from 'hooks/useViewport'
import s from './menuIcon.module.scss'

function MenuIcon({ open, onClick, showMenu }) {
  const { width } = useViewport()
  const isMobileSize = () => width < 768

  return (
    <div
      className={c(s.hamburger, isMobileSize() && showMenu && s.hamburgerRotate)}
      role="button"
      tabIndex={-1}
      onClick={onClick}
    >
      <span className={c(s.line, !open && s.isActive)} />
      <span className={c(s.line, !open && s.isActive)} />
      <span className={c(s.line, !open && s.isActive)} />
    </div>
  )
}

MenuIcon.propTypes = {
  open: PropTypes.bool,
  showMenu: PropTypes.bool,
  onClick: PropTypes.func,
}

MenuIcon.defaultProps = {
  open: false,
  showMenu: false,
  onClick: null,
}

export default MenuIcon
