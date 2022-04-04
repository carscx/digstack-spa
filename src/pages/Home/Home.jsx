import { Link } from 'react-router-dom'
import { ABOUT_US } from 'routes/paths'
import s from './home.module.scss'

function Home() {
  return (
    <div className={s.home}>
      <h2>Inicio</h2>
      <h3>Digstack</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugiat praesentium,
        velit, saepe ipsum et corporis esse recusandae sint aperiam suscipit autem consectetur
        labore officiis reprehenderit quibusdam minus dignissimos in?
      </p>
      <Link to={ABOUT_US}>Ir a Acerca de</Link>
    </div>
  )
}

export default Home
