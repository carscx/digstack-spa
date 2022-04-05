import { observer } from 'mobx-react'
import storeContext from 'providers/storeContext'
import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LOGIN } from './paths'

function ProtectedRoute() {
  const { authStore } = useContext(storeContext)

  if (!authStore.isAuthenticated) {
    return <Navigate to={LOGIN} replace />
  }

  return <Outlet />
}

export default observer(ProtectedRoute)
