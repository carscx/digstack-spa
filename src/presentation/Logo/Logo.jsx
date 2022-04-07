import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import logo from 'img/logo.png'
import logoFull from 'img/logo-full.png'
import s from './logo.module.scss'

function Logo({ full }) {
  const { t } = useTranslation()
  return <img className={s.logo} src={full ? logoFull : logo} alt={t('common:siteName')} />
}

Logo.propTypes = {
  full: PropTypes.bool,
}

Logo.defaultProps = {
  full: false,
}

export default Logo
