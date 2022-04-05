/* eslint-disable dot-notation */
import axios from 'axios'
import { observer } from 'mobx-react'
import { Route, Routes, useLocation } from 'react-router-dom'
import StoreContext from 'providers/storeContext'
import RootStore from 'stores/RootStore'
import AuthStore from 'stores/AuthStore'
import Home from 'pages/Home'
import About from 'pages/About'
import ProtectedRoute, { Wrapper } from 'routes'
import Login from 'pages/Login'
import Register from 'pages/Register'
import { ABOUT_US, HOME, LOGIN, REGISTER } from 'routes/paths'
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

  return (
    <StoreContext.Provider value={rootStore}>
      <Routes location={location}>
        <Route element={<Wrapper />}>
          <Route element={<ProtectedRoute user={authStore.isAuthenticated} />}>
            <Route path={HOME} element={<Home />} />
            <Route path={ABOUT_US} element={<About />} />
            <Route path={REGISTER} element={<Register />} />
          </Route>
          <Route path={LOGIN} element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>No hay resultados</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </StoreContext.Provider>
  )
}

export default observer(App)
