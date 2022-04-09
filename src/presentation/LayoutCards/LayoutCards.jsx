import { CardProject, CardUser } from 'presentation'
import { Title } from 'presentation/ui'
import { PropTypes } from 'prop-types'
import s from './layoutCards.module.scss'

function LayoutCards({ data, title, type }) {
  const renderCard = (typeCard, item) => {
    switch (typeCard) {
      case 'projects':
        return <CardProject data={item} key={item.id} />
      case 'users':
        return <CardUser data={item} key={item.id} />
      default:
        return <CardProject data={item} key={item.id} />
    }
  }

  return (
    <div className={s.layoutCards}>
      <div className={s.header}>
        <Title title={title} />
      </div>
      <div className={s.main}>
        <ul className={s.cards}>{data.map((item) => renderCard(type, item))}</ul>
      </div>
    </div>
  )
}

LayoutCards.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
}

LayoutCards.defaultProps = {
  type: 'projects',
}

export default LayoutCards
