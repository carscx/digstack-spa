import { memo } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import c from 'classnames'
import Input from 'presentation/ui/Input'
import InputStore from 'stores/InputStore'
import { ExclamationIcon } from 'presentation/ui/Icons'
import styles from './inputWrapper.module.scss'

function InputWrapper({
  wrapperClassName,
  translationFile,
  as: Component,
  placeholder,
  inputStore,
  alignError,
  inputRef,
  required,
  label,
  name,
  ...props
}) {
  const { t } = useTranslation(translationFile)
  let useLabel = label
  let usePlaceholder = placeholder

  if (name !== null) {
    if (label === null) {
      useLabel = t(`${name}Label`)
    }

    if (placeholder === null) {
      usePlaceholder = t(`${name}Placeholder`)
    }
  }

  if (required) {
    useLabel = `${useLabel} *`
  }

  return (
    <div className={c(styles.wrapper, wrapperClassName && wrapperClassName)}>
      <Component
        value={inputStore && inputStore.value}
        error={inputStore && inputStore.error}
        placeholder={usePlaceholder}
        inputRef={inputRef}
        label={useLabel}
        {...props}
      />
      {inputStore && inputStore.error && inputStore.errorMessage !== '' && (
        <small className={c(styles.error, styles[`align-${alignError}`])}>
          <ExclamationIcon />
          {t(inputStore.errorMessage)}
        </small>
      )}
    </div>
  )
}

InputWrapper.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  alignError: PropTypes.oneOf(['start', 'center', 'end']),
  as: PropTypes.oneOfType([PropTypes.any]),
  inputStore: PropTypes.instanceOf(InputStore),
  wrapperClassName: PropTypes.string,
  translationFile: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
}

InputWrapper.defaultProps = {
  wrapperClassName: null,
  translationFile: '',
  alignError: 'start',
  placeholder: null,
  inputStore: null,
  required: false,
  inputRef: null,
  label: null,
  name: null,
  as: Input,
}

export default memo(observer(InputWrapper))
