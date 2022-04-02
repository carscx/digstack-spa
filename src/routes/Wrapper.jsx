import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

function Wrapper() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
        },
        in: {
          opacity: 1,
        },
        out: {
          opacity: 0,
        },
      }}
      transition={{
        type: 'spring',
        damping: 10,
        stiffness: 50,
        delay: 2,
      }}
    >
      <Outlet />
    </motion.div>
  )
}

export default Wrapper
