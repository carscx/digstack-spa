import { PropTypes } from 'prop-types'
import s from './title.module.scss'

function Title({ title }) {
  return <p className={s.title}>{title}</p>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
