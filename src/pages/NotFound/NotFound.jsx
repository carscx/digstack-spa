import { Button } from 'presentation/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { HOME } from 'routes/paths'
import s from './notFound.module.scss'

function NotFound() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className={s.notFound}>
      <div className={s.textNotFound} title="404">
        404
      </div>
      <Button
        className={s.btnHome}
        label={t('common:goToHome')}
        type="button"
        onClick={() => navigate(HOME)}
      />
    </div>
  )
}

export default NotFound
