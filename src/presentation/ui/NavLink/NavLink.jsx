/* eslint-disable react/forbid-prop-types */
import { forwardRef } from 'react'
import { PropTypes } from 'prop-types'
import { NavLink as BaseNavLink } from 'react-router-dom'

const NavLink = forwardRef(({ activeClassName, activeStyle, ...props }, ref) => (
  <BaseNavLink
    ref={ref}
    {...props}
    className={({ isActive }) =>
      [props.className, isActive ? activeClassName : null].filter(Boolean).join(' ')
    }
    style={({ isActive }) => ({
      ...props.style,
      ...(isActive ? activeStyle : null),
    })}
  />
))

NavLink.propTypes = {
  activeClassName: PropTypes.any,
  activeStyle: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.func,
}

NavLink.defaultProps = {
  activeClassName: null,
  activeStyle: null,
  className: '',
  style: null,
}

export default NavLink
