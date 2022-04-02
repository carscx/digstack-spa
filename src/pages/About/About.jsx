import { Link } from 'react-router-dom'
import { HOME } from 'routes/paths'
import s from './about.module.scss'

function About() {
  return (
    <div className={s.about}>
      <h2>Acerca de</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugiat praesentium,
        velit, saepe ipsum et corporis esse recusandae sint aperiam suscipit autem consectetur
        labore officiis reprehenderit quibusdam minus dignissimos in?
      </p>
      <Link to={HOME}>Ir a la Home</Link>
    </div>
  )
}

export default About
