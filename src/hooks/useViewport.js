import viewportContext from 'providers/viewportContext'
import { useContext } from 'react'

const useViewport = () => {
  const { width, height } = useContext(viewportContext)
  return { width, height }
}

export default useViewport
