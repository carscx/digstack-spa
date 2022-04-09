import { Button } from 'presentation/ui'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { IMAGES_URL } from 'services/config'

import s from './cardProject.module.scss'

function CardProject({ data }) {
  const { t } = useTranslation('common')
  return (
    <li className={s.cardItem}>
      <div className={s.card}>
        <div className={s.cardImageBox}>
          {data.image_path ? (
            <img
              className={s.cardImage}
              src={`${IMAGES_URL}${data.image_path}`}
              alt={data.title}
              title={data.title}
            />
          ) : (
            <img
              className={s.cardImage}
              src="https://picsum.photos/500/300/?image=5"
              alt={data.title}
              title={data.title}
            />
          )}
        </div>
        <div className={s.cardContent}>
          <h2 className={s.cardTitle}>{data.title}</h2>
          <p className={s.cardText}>{data.description}</p>
          <Button className={s.btnCard} label={t('viewMore')} />
        </div>
      </div>
    </li>
  )
}

CardProject.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default CardProject
