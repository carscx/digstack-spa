import { memo } from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './formLabel.module.scss'

function FormLabel({ label, disabled, isPlaceholder, error }) {
  return (
    <span
      className={c(
        styles.label,
        isPlaceholder && styles.isPlaceholder,
        disabled && styles.disabled,
        error && styles.error
      )}
    >
      {label}
    </span>
  )
}

FormLabel.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isPlaceholder: PropTypes.bool,
  error: PropTypes.bool,
}

FormLabel.defaultProps = {
  label: '',
  disabled: false,
  error: false,
  isPlaceholder: false,
}

export default memo(FormLabel)
