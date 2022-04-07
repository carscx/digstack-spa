import { observer } from 'mobx-react'
import StoreContext from 'providers/storeContext'
import ViewportProvider from 'providers/viewportProvider'
import { RootStore } from 'stores'
import { AppRouter } from 'routes'

import { AxiosInterceptors } from 'util'

import 'styles/base.module.scss'
import 'util/i18n'

const rootStore = new RootStore()

function App() {
  return (
    <StoreContext.Provider value={rootStore}>
      <AxiosInterceptors rootStore={rootStore}>
        <ViewportProvider>
          <AppRouter />
        </ViewportProvider>
      </AxiosInterceptors>
    </StoreContext.Provider>
  )
}

export default observer(App)
