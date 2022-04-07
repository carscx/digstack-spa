/* eslint-disable no-param-reassign */
import { useContext, useMemo } from 'react'
import { interceptors } from 'axios'
import storeContext from 'providers/storeContext'
import { HOME, LOGIN } from 'routes/paths'

const AxiosInterceptors = ({ children, rootStore }) => {
  const { authStore } = useContext(storeContext)

  useMemo(() => {
    // Handles all 403 requests
    interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status !== 403 && error.response.status !== 422) {
          error.response.unknown = true
        }

        return Promise.reject(error)
      }
    )

    // Handles all 500 and 400 requests
    interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response !== undefined && error.response.status === 500) {
          error.response.unknown = true
          authStore.logout()
          if (error.response.status === 500) {
            window.location = HOME
          } else if (error.response.status === 503) {
            window.location = HOME
          }
        }

        return Promise.reject(error)
      }
    )

    // Handles all 503
    interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response !== undefined && error.response.status === 503) {
          error.response.unknown = true
          authStore.logout()
          window.location = HOME
        }

        return Promise.reject(error)
      }
    )

    interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response !== undefined && error.response.status === 401) {
          authStore.logout()
          document.cookie = 'authUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
          error.response.unknown = true
          setTimeout(() => {
            if (window.location.pathname !== LOGIN) {
              window.location = LOGIN
            }
          }, 1100)
        }

        return Promise.reject(error)
      }
    )

    // Adds bearer to all API requests
    interceptors.request.use(
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
  }, [authStore])

  return children
}

export default AxiosInterceptors
