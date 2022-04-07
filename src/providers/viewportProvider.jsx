import { useState, useEffect, useMemo } from 'react'
import { PropTypes } from 'prop-types'
import viewportContext from './viewportContext'

function ViewportProvider({ children }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const widthHeight = useMemo(() => ({ width, height }), [width, height])

  return <viewportContext.Provider value={widthHeight}>{children}</viewportContext.Provider>
}

ViewportProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ViewportProvider
