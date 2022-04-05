import c from 'classnames'
import { PropTypes } from 'prop-types'
import s from './text.module.scss'

function Text({ text, className }) {
  return <p className={c(s.text, className)}>{text}</p>
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.any]),
}

Text.defaultProps = {
  className: null,
}

export default Text
