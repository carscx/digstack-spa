import { memo } from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import styles from './button.module.scss'

function Button({
  label,
  icon,
  secondary,
  cancel,
  outline,
  big,
  small,
  type,
  fullWidth,
  isLoading,
  hidden,
  circle,
  iconPositionLeft,
  as: Component,
  className,
  disabled,
  error,
  smallest,
  ...props
}) {
  return (
    <Component
      type={Component === 'button' ? type : null}
      disabled={isLoading || disabled}
      className={c(
        styles.button,
        big && styles.big,
        small && styles.small,
        smallest && styles.smallest,
        secondary && styles.secondary,
        cancel && styles.cancel,
        outline && styles.outline,
        fullWidth && styles.fullWidth,
        isLoading && styles.isLoading,
        hidden && styles.hidden,
        circle && styles.circle,
        iconPositionLeft && styles.iconLeft,
        disabled && styles.disabled,
        error && styles.error,
        className && className
      )}
      {...props}
    >
      <>
        {label}
        {icon && <span className={styles.icon}>{icon}</span>}
        {isLoading && (
          <div
            className={c(
              styles.loadingRing,
              secondary && styles.secondary,
              cancel && styles.cancel,
              outline && styles.outline,
              small && styles.small
            )}
          />
        )}
      </>
    </Component>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  secondary: PropTypes.bool,
  cancel: PropTypes.bool,
  outline: PropTypes.bool,
  big: PropTypes.bool,
  small: PropTypes.bool,
  smallest: PropTypes.bool,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  hidden: PropTypes.bool,
  circle: PropTypes.bool,
  iconPositionLeft: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.any]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
}

Button.defaultProps = {
  label: null,
  icon: null,
  secondary: false,
  cancel: false,
  outline: false,
  big: false,
  small: false,
  smallest: false,
  type: 'button',
  fullWidth: false,
  isLoading: false,
  hidden: false,
  circle: false,
  iconPositionLeft: false,
  as: 'button',
  className: null,
  disabled: false,
  error: false,
}

export default memo(Button)
