import { CardNews, CardProject, CardUser } from 'presentation'
import { Title } from 'presentation/ui'
import { PropTypes } from 'prop-types'
import s from './layoutCards.module.scss'

function LayoutCards({ data, title, type, iconTitle }) {
  const renderCard = (typeCard, item) => {
    switch (typeCard) {
      case 'news':
        return <CardNews data={item} key={item.id} />
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
        <Title title={title} iconTitle={iconTitle} />
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
  type: PropTypes.oneOf(['news', 'users', 'projects']),
  iconTitle: PropTypes.node,
}

LayoutCards.defaultProps = {
  type: 'projects',
  iconTitle: null,
}

export default LayoutCards
