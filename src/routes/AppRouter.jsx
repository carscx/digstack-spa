import { observer } from 'mobx-react'
import { Dashboard, Home, Login, Logout, News, NotFound, Partners, Projects, Register } from 'pages'
import { useLocation, Routes, Route, Outlet } from 'react-router-dom'
import { AuthStore } from 'stores'
import { ProtectedRoute } from 'routes'
import { HOME, LOGIN, LOGOUT, NEWS, PARTNERS, PROJECTS, REGISTER } from './paths'

const authStore = new AuthStore()

function AppRouter() {
  const location = useLocation()
  return (
    <Routes location={location}>
      <Route element={<Outlet />}>
        <Route element={<ProtectedRoute user={authStore.isAuthenticated} />}>
          <Route path={HOME} element={<Home />}>
            <Route path={HOME} element={<Dashboard />} />
            <Route path={NEWS} element={<News />} />
            <Route path={PARTNERS} element={<Partners />} />
            <Route path={PROJECTS} element={<Projects />} />
          </Route>
          <Route path={REGISTER} element={<Register />} />
          <Route path={LOGOUT} element={<Logout />} />
        </Route>
        <Route path={LOGIN} element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default observer(AppRouter)
