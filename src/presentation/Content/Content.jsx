import { PropTypes } from 'prop-types'
import s from './content.module.scss'

function Content({ children }) {
  return <main className={s.content}>{children}</main>
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
