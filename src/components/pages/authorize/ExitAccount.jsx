import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { setStatusModal } from '../../../redux/slices/LoginPopup'
import { useDispatch } from 'react-redux'

const ExitAccount = ({ question, answer }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    
    return (
        <div className='w-full flex gap-x-2 justify-center mb-4'>
            <span className='text-DarkBlue'>{t(`${question}`)}</span>
            <Link onClick={() => { dispatch(setStatusModal(false)) }} to="/authorize/register" className='text-SunshineYellow underline'>{t(`${answer}`)}</Link>
        </div>
    )
}

export default ExitAccount
