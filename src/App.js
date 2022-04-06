/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
import axios from 'axios'
import { observer } from 'mobx-react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import StoreContext from 'providers/storeContext'
import RootStore from 'stores/RootStore'
import AuthStore from 'stores/AuthStore'
import Home from 'pages/Home'
import About from 'pages/About'
import ProtectedRoute from 'routes'
import Login from 'pages/Login'
import Register from 'pages/Register'
import NotFound from 'pages/NotFound'
import Logout from 'pages/Logout'
import { ABOUT_US, HOME, LOGIN, LOGOUT, REGISTER } from 'routes/paths'
import 'styles/base.module.scss'
import 'util/i18n'

const rootStore = new RootStore()
const authStore = new AuthStore()

function App() {
  const location = useLocation()

  axios.interceptors.response.use((res) => {
    res.headers['accept'] = 'application/json'
    res.headers['content-type'] = 'application/json'
    res.headers['Host'] = '*'
    return res
  })

  axios.interceptors.request.use(
    (config) => {
      if (rootStore.authStore.isAuthenticated) {
        config.headers.Authorization = `Bearer ${rootStore.authStore.authUser.token}`
      }

      config.headers['accept-language'] = 'es'

      // Do something before request is sent
      return config
    },
    (error) => Promise.reject(error)
  )

  return (
    <StoreContext.Provider value={rootStore}>
      <Routes location={location}>
        <Route element={<Outlet />}>
          <Route element={<ProtectedRoute user={authStore.isAuthenticated} />}>
            <Route path={HOME} element={<Home />} />
            <Route path={ABOUT_US} element={<About />} />
            <Route path={REGISTER} element={<Register />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
          <Route path={LOGIN} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </StoreContext.Provider>
  )
}

export default observer(App)
