import PropTypes from 'prop-types'
import s from './usersIcon.module.scss'

function UsersIcon({ className }) {
  return (
    <svg
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      className={className}
      viewBox="0 0 32 32"
      style={{ enableBackground: 'new 0 0 32 32' }}
      xmlSpace="preserve"
    >
      <line className={s.st0} x1="16" y1="17" x2="16" y2="20" />
      <polyline className={s.st0} points="14,21 16,19.8 18,21 " />
      <path
        className={s.st0}
        d="M17.3,8.6c0,1,0.6,1.8,1.6,2.1c1.1,0.3,1.9,1.2,2.2,2.3l-10,0c0.2-1.1,1.1-2,2.1-2.3c0.9-0.3,1.6-1.1,1.6-2.1v0
	"
      />
      <path
        className={s.st0}
        d="M16,9L16,9c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v2C18,8.1,17.1,9,16,9z"
      />
      <path
        className={s.st0}
        d="M25.3,24.6c0,1,0.6,1.8,1.6,2.1c1.1,0.3,1.9,1.2,2.2,2.3l-10,0c0.2-1.1,1.1-2,2.1-2.3c0.9-0.3,1.6-1.1,1.6-2.1
	v0"
      />
      <path
        className={s.st0}
        d="M24,25L24,25c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v2C26,24.1,25.1,25,24,25z"
      />
      <path
        className={s.st0}
        d="M9.3,24.6c0,1,0.6,1.8,1.6,2.1c1.1,0.3,1.9,1.2,2.2,2.3L3,29c0.2-1.1,1.1-2,2.1-2.3c0.9-0.3,1.6-1.1,1.6-2.1v0"
      />
      <path
        className={s.st0}
        d="M8,25L8,25c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v2C10,24.1,9.1,25,8,25z"
      />
    </svg>
  )
}

UsersIcon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.any]),
}

UsersIcon.defaultProps = {
  className: null,
}

export default UsersIcon
