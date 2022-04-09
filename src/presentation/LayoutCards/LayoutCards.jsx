import Card from 'presentation/Card'
import { Title } from 'presentation/ui'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import s from './layoutCards.module.scss'

function LayoutCards({ data }) {
  const { t } = useTranslation('menu')
  return (
    <div className={s.layoutCards}>
      <div className={s.header}>
        <Title title={t('projects')} />
      </div>
      <div className={s.main}>
        <ul className={s.cards}>
          {data.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

LayoutCards.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
}

export default LayoutCards
