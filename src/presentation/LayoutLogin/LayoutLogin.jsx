import { PropTypes } from 'prop-types'

import s from './layoutLogin.module.scss'

function LayoutLogin({ children }) {
  return (
    <div className={s.wrapLogin}>
      <div className={s.layoutLogin}>{children}</div>
    </div>
  )
}

LayoutLogin.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLogin
