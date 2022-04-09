import c from 'classnames'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import s from './greeting.module.scss'

function Greeting({ isClosed, username }) {
  const { t } = useTranslation('common')

  return (
    <div className={c(s.greeting, isClosed && s.isClose)}>
      <div className={s.content}>
        <div className={s.container}>
          <p className={c(s.text, isClosed && s.isClose)}>{t('greeting')}</p>
          <ul className={c(s.list, isClosed && s.isClose)}>
            <li className={s.item}>{username !== '' ? username : t('world')}!</li>
            <li className={s.item}>{t('director')}!</li>
            <li className={s.item}>{t('pm')}!</li>
            <li className={s.item}>{t('developer')}!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

Greeting.propTypes = {
  isClosed: PropTypes.bool,
  username: PropTypes.string,
}

Greeting.defaultProps = {
  isClosed: false,
  username: '',
}

export default Greeting
