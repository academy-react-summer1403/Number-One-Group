import { FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon, YouTubeIcon } from '../../../core/icon'
import CreateSocialMediaItems from '../../common/CreateSocialMediaItems'
import GooglePlay from "../../../assets/images/google-play.png"
import AppStore from "../../../assets/images/apple-store.png"

const SocialNetworks = ({ show }) => {
    const socialMedia = [
        { icon: <YouTubeIcon fill="#B2BBCC" /> },
        { icon: <InstagramIcon fill="#B2BBCC" /> },
        { icon: <WhatsAppIcon fill="#B2BBCC" /> },
        { icon: <TwitterIcon fill="#B2BBCC" /> },
        { icon: <FacebookIcon fill="#B2BBCC" /> },
    ]

    const downloadApp = [
        { url: AppStore },
        { url: GooglePlay },
    ]

    return show && (
        <div className=" max-sm:mt-2 max-sm:m-auto">
            <div className='flex'>
                {socialMedia.map((obj, index) => <CreateSocialMediaItems Icon={obj.icon} key={index} style="border-none" />)}
            </div>
            <div className="flex md:gap-2 gap-3  mt-5">
                {downloadApp.map((item, index) => (
                    <img key={index} src={item.url} alt="Download Application" className='lg:h-11 h-8 rounded' />
                ))}
            </div>
        </div>
    )
}

export default SocialNetworks