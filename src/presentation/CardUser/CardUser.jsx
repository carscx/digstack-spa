import PropTypes from 'prop-types'
import { IMAGES_URL } from 'services/config'

import s from './cardUser.module.scss'

function CardUser({ data }) {
  return (
    <li className={s.cardItem}>
      <div className={s.card}>
        <div className={s.topBar}>&nbsp;</div>
        <div className={s.top}>&nbsp;</div>
        <div className={s.content}>
          {data.image_path ? (
            <img
              className={s.contentImage}
              src={`${IMAGES_URL}${data.image_path}`}
              alt={data.title}
              title={data.title}
            />
          ) : (
            <img
              className={s.contentImage}
              src="https://picsum.photos/500/300/?image=177"
              alt={data.title}
              title={data.title}
            />
          )}
          <p className={s.contentName}>{`${data.first_name} ${data.last_name}`}</p>
          <p className={s.contentDescription}>{data.email}</p>
        </div>
      </div>
    </li>
  )
}

CardUser.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default CardUser
