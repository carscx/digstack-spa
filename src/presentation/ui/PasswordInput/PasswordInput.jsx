import { useState } from 'react'
import c from 'classnames'
import PropTypes from 'prop-types'
import InputStore from 'stores/InputStore'
import { InputWrapper } from 'presentation/ui'
import { EyeOpenIcon, EyeClosedIcon } from 'presentation/ui/Icons'
import styles from './passwordInput.module.scss'

function PasswordInput({ inputStore, onChange, label, ...props }) {
  const [type, setType] = useState('password')

  const toggleType = () => {
    setType(type === 'password' ? 'text' : 'password')
  }

  const handlePressEnter = (e) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      toggleType()
    }
  }

  return (
    <div className={styles.wrapper}>
      <InputWrapper
        inputStore={inputStore}
        onChange={onChange}
        label={label}
        type={type}
        {...props}
      />
      <div
        className={c(styles.icon, type === 'text' && styles.iconTextColor)}
        onKeyPress={handlePressEnter}
        onClick={toggleType}
        role="button"
        tabIndex="0"
      >
        {type === 'password' && <EyeClosedIcon className={styles.closeIcon} />}
        {type === 'text' && <EyeOpenIcon className={styles.openIcon} />}
      </div>
    </div>
  )
}

PasswordInput.propTypes = {
  inputStore: PropTypes.instanceOf(InputStore).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default PasswordInput
