import { Link } from 'react-router-dom'
import ChangeMoment from '../../../../core/utility/moment'

const CreateBlogCard = ({ name, date, id }) => {
    return (
        <Link to={`/BlogDetails/${id}`} className='w-full flex justify-center sm:justify-between group cursor-pointer'>
            <span className='text-center sm:text-start group-hover:text-VioletBlue'>{name}</span>
            <span dir='ltr' className='hidden md:block group-hover:text-VioletBlue'>{ChangeMoment(date, "YYYY/MM/DD", "persian")}</span>
        </Link>
    )
}

export default CreateBlogCard
