import PropTypes from 'prop-types'

function EyeClosedIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 13"
      height="13"
      fill="none"
      width="24"
    >
      <path
        d="M1 1C1 1 5 9 12 9C19 9 23 1 23 1"
        strokeLinejoin="round"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        x1="12"
        y1="10"
        x2="12"
        y2="12"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        x1="8"
        y1="9"
        x2="8"
        y2="11"
      />
      <line
        x1="4"
        y1="6"
        x2="4"
        y2="8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        x1="16"
        y1="9"
        x2="16"
        y2="11"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        x1="20"
        y1="6"
        x2="20"
        y2="8"
      />
    </svg>
  )
}

EyeClosedIcon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.any]),
}

EyeClosedIcon.defaultProps = {
  className: null,
}

export default EyeClosedIcon
