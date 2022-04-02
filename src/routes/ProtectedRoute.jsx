import { PropTypes } from 'prop-types'
import { Navigate } from 'react-router-dom'
import { LOGIN } from './paths'

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to={LOGIN} replace />
  }

  return children
}

ProtectedRoute.propTypes = {
  user: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute
