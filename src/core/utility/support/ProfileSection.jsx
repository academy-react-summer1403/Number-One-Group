import { useTranslation } from 'react-i18next'
import adminImg from '../../../assets/images/admin.png'

const ProfileSection = () => {
  const {t} = useTranslation()

  return (
    <div className="bg-VioletBlue w-full">
      <div className="flex items-center gap-3 py-4 px-4">
        <img src={adminImg} className='h-10 w-10 rounded-full' alt="prof"/>
          <div >
            <h1 className='text-white font-IranSans'>{t('ProfileSection1')}</h1>
            <p className='text-sm text-zinc-300 font-IranSans'>{t('ProfileSection2')}</p>
          </div>
      </div>
    </div>
  )
}

export default ProfileSection