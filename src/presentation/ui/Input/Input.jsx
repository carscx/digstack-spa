import { memo, useState } from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import { FormLabel } from 'presentation/ui'
import styles from './input.module.scss'

const handleInputChange = (e, onChange, onlyNumeric) => {
  if (onlyNumeric && !/^-?\d*[.]?\d{0,2}$/.test(e.target.value)) {
    return false
  }

  if (onlyNumeric && e.target.value * 1 > Number.MAX_SAFE_INTEGER - 1) {
    return false
  }

  onChange(e)

  return null
}

function Input({
  label,
  inputRef,
  disabled,
  onChange,
  onlyNumeric,
  error,
  value,
  className,
  onFocus,
  onBlur,
  ...props
}) {
  const [hasFocus, setHasFocus] = useState(false)

  const handleFocus = () => {
    setHasFocus(true)

    if (onFocus) {
      onFocus()
    }
  }

  const handleBlur = () => {
    setHasFocus(false)

    if (onBlur) {
      onBlur()
    }
  }

  return (
    <label className={styles.label}>
      <FormLabel
        isPlaceholder={!hasFocus && value === ''}
        disabled={disabled}
        label={label}
        error={error}
      />
      <input
        className={c(styles.input, error && styles.error, className !== '' && className)}
        onChange={(e) => handleInputChange(e, onChange, onlyNumeric)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        ref={inputRef}
        value={value}
        {...props}
      />
    </label>
  )
}

Input.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onlyNumeric: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
}

Input.defaultProps = {
  onlyNumeric: false,
  disabled: false,
  label: null,
  inputRef: null,
  onChange: null,
  onFocus: null,
  onBlur: null,
  className: '',
  error: false,
  value: '',
}

export default memo(Input)
