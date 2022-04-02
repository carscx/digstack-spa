import { PropTypes } from 'prop-types'

import s from './layoutLogin.module.scss'

function LayoutLogin({ children }) {
  return <div className={s.layoutLogin}>{children}</div>
}

LayoutLogin.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutLogin
