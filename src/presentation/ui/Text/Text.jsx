import { PropTypes } from 'prop-types'
import s from './text.module.scss'

function Text({ text }) {
  return <p className={s.text}>{text}</p>
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Text
