import c from 'classnames'
import { PropTypes } from 'prop-types'
import s from './title.module.scss'

function Title({ title, className, iconTitle }) {
  return (
    <p className={c(s.title, className)}>
      {iconTitle}
      {title}
    </p>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.any]),
  iconTitle: PropTypes.node,
}

Title.defaultProps = {
  className: null,
  iconTitle: null,
}

export default Title
