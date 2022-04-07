import { PropTypes } from 'prop-types'
import s from './layout.module.scss'

function Layout({ children }) {
  return (
    <div className={s.wrapper}>
      <div className={s.layout}>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
