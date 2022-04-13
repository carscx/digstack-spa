import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PostStore } from 'stores'
import { LayoutCards } from 'presentation'
import { Loader } from 'presentation/ui'
import { NewsIcon } from 'presentation/ui/Icons'
import s from './news.module.scss'

function News() {
  const [postStore] = useState(() => new PostStore())
  const { isLoading } = postStore
  const { t } = useTranslation('menu')

  useEffect(() => {
    postStore.getPosts()
  }, [])

  return (
    <div className={s.news}>
      {!isLoading ? (
        <LayoutCards
          type="news"
          data={postStore?.posts}
          title={t('news')}
          iconTitle={<NewsIcon />}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default observer(News)
