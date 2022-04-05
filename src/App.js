import { observer } from 'mobx-react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
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

  return (
    <StoreContext.Provider value={rootStore}>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location}>
          <Route element={<Wrapper />}>
            {/* <Route
              path={HOME}
              element={
                <ProtectedRoute user={authStore.isAuthenticated}>
                  <Home />
                </ProtectedRoute>
              }
            /> */}
            <Route element={<ProtectedRoute user={authStore.isAuthenticated} />}>
              <Route path={HOME} element={<Home />} />
              <Route path={ABOUT_US} element={<About />} />
              <Route path={REGISTER} element={<Register />} />
            </Route>
            {/* <Route
              path={ABOUT_US}
              element={
                <ProtectedRoute user={authStore.isAuthenticated}>
                  <About />
                </ProtectedRoute>
              }
            /> */}
            {/* <Route
              path={REGISTER}
              element={
                <ProtectedRoute user={authStore.isAuthenticated}>
                  <Register />
                </ProtectedRoute>
              }
            /> */}
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
      </AnimatePresence>
    </StoreContext.Provider>
  )
}

export default observer(App)
