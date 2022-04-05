import c from 'classnames'
import { PropTypes } from 'prop-types'
import s from './title.module.scss'

function Title({ title, className }) {
  return <p className={c(s.title, className)}>{title}</p>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.any]),
}

Title.defaultProps = {
  className: null,
}

export default Title
