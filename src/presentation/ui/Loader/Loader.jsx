import { Logo } from 'presentation'
import s from './loader.module.scss'

function Loader() {
  return (
    <div className={s.loaderWrap}>
      <div className={s.loader}>
        <Logo />
      </div>
    </div>
  )
}

export default Loader
