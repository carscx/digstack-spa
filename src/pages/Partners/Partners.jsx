import { Link } from 'react-router-dom'
import { HOME } from 'routes/paths'
import s from './partners.module.scss'

function Partners() {
  return (
    <div className={s.partners}>
      <h2>Compañeros</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, fugiat praesentium,
        velit, saepe ipsum et corporis esse recusandae sint aperiam suscipit autem consectetur
        labore officiis reprehenderit quibusdam minus dignissimos in?
      </p>
      <Link to={HOME}>Ir a la Home</Link>
    </div>
  )
}

export default Partners
