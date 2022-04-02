import PropTypes from 'prop-types'

function EyeOpenIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 18"
      height="18"
      width="24"
      fill="none"
    >
      <path
        d="M2.57441 9.70747C2.39492 9.42955 2.25003 9.18887 2.14074 9C2.25003 8.81113 2.39492 8.57045 2.57441 8.29253C3.03543 7.57869 3.71817 6.6294 4.60454 5.68394C6.39552 3.77356 8.89951 2 12 2C15.1005 2 17.6045 3.77356 19.3955 5.68394C20.2818 6.6294 20.9646 7.57869 21.4256 8.29253C21.6051 8.57045 21.75 8.81113 21.8593 9C21.75 9.18887 21.6051 9.42955 21.4256 9.70747C20.9646 10.4213 20.2818 11.3706 19.3955 12.3161C17.6045 14.2264 15.1005 16 12 16C8.89951 16 6.39552 14.2264 4.60454 12.3161C3.71817 11.3706 3.03543 10.4213 2.57441 9.70747ZM23.8941 8.55208C23.8943 8.55245 23.8944 8.55279 23 9C23.8944 9.44721 23.8943 9.44755 23.8941 9.44792L23.8936 9.4488L23.8925 9.45113L23.889 9.45796L23.8777 9.48018C23.8681 9.49873 23.8546 9.52469 23.8372 9.55756C23.8025 9.6233 23.752 9.71677 23.686 9.83401C23.5542 10.0684 23.3601 10.3985 23.1057 10.7925C22.5979 11.5787 21.8432 12.6294 20.8545 13.6839C18.8955 15.7736 15.8995 18 12 18C8.10049 18 5.10448 15.7736 3.14546 13.6839C2.15683 12.6294 1.40207 11.5787 0.894336 10.7925C0.63985 10.3985 0.445792 10.0684 0.313971 9.83401C0.248023 9.71677 0.19754 9.6233 0.162753 9.55756C0.145357 9.52469 0.131875 9.49873 0.122338 9.48018L0.11099 9.45796L0.107539 9.45113L0.10637 9.4488L0.105925 9.44792C0.105741 9.44755 0.105573 9.44721 1 9C0.105573 8.55279 0.105741 8.55245 0.105925 8.55208L0.10637 8.5512L0.107539 8.54887L0.11099 8.54204L0.122338 8.51982C0.131875 8.50127 0.145357 8.47531 0.162753 8.44244C0.19754 8.3767 0.248023 8.28323 0.313971 8.16599C0.445792 7.93164 0.63985 7.60152 0.894336 7.20747C1.40207 6.42131 2.15683 5.3706 3.14546 4.31606C5.10448 2.22644 8.10049 0 12 0C15.8995 0 18.8955 2.22644 20.8545 4.31606C21.8432 5.3706 22.5979 6.42131 23.1057 7.20747C23.3601 7.60152 23.5542 7.93164 23.686 8.16599C23.752 8.28323 23.8025 8.3767 23.8372 8.44244C23.8546 8.47531 23.8681 8.50127 23.8777 8.51982L23.889 8.54204L23.8925 8.54887L23.8936 8.5512L23.8941 8.55208ZM23 9L23.8944 8.55279C24.0352 8.83431 24.0352 9.16569 23.8944 9.44721L23 9ZM0.105573 8.55279L1 9L0.105573 9.44721C-0.0351909 9.16569 -0.0351909 8.83431 0.105573 8.55279ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
      />
    </svg>
  )
}

EyeOpenIcon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.any]),
}

EyeOpenIcon.defaultProps = {
  className: null,
}

export default EyeOpenIcon