import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  YouTubeIcon
} from "../../../core/icon";
// import { CustomButton, CreateSocialMediaItems } from ".";
import { UnitPrice } from "../../../core/utility/SeparationPrice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CustomButton from "../Button";
import CreateSocialMediaItems from "../CreateSocialMediaItems";
import paymentIcon from '../../../assets/images/payment.png'
import { setStatusModal } from "../../../redux/slices/LoginPopup";

export const detailVariant = {
  "course-detail": "lg:w-72 mb-8",
  "event-detail": "w-full",
}
export const detailInfoVariant = {
  "event-detail": "EventInfo",
  "course-detail": "CourseInfo",
  "cart": "cartInfo",
  "shop-detail": "shopInfo",
  
}
export const priceInfoVariant = {
  "event-detail": "EventPrice",
  "course-detail": "CoursePrice",
  "cart": "cartTotalSum"
}

const DetailsBox = ({
  variant,
  price,
  Detail,
  arrowColor,
  id,
  colorButton,
  btnText,
  shareBox = true,
  actionReserve,
  reserveStatus,
  styleDisplay,
  shareText,
}) => {
  const userInfo = useSelector(state => state.UserInfo.info);
  const dispatch = useDispatch()
  // Add course reserve function
  const itemReserve = () => {
    if (userInfo) {
      console.log(reserveStatus)
      if (reserveStatus == 1) {
        toast.error('دوره مورد نظر قبلا رزرو شده')
      }
      else {
        actionReserve(id);
      }
    }
    else {
      toast.error('لطفا لاگین کنید!')
      dispatch(setStatusModal(true));
    }
  }

  const { t, i18n } = useTranslation();
  const AppIcons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <WhatsAppIcon />,
    <InstagramIcon />,
    <YouTubeIcon />,
  ]

  return (
    <div data-aos={`fade-${i18n.language === 'fa' ? 'left' : 'right'}`} data-aos-duration="700"
      className={`Box-shadow1 w-full p-5 h-fit bg-MainBg rounded-lg border border-LightLavender flex flex-wrap justify-center ${detailVariant?.[variant]}`}>
      {/* price Info */}
      <div className={`bg-VioletBlue px-4 py-3 w-full min-w-52 shadow-[0_0_10px_1px_rgba(13,9,99,0.36)] text-white rounded-lg flex flex-wrap justify-center gap-y-3 ${styleDisplay}`}>
        <h1 className="text-xs w-full">{t(priceInfoVariant?.[variant])}:</h1>
        <h2 className="text-2xl font-semibold w-fit"><span className="float-left mx-1">{i18n.language === 'fa' ? 'تومان' : '$'}</span>{UnitPrice(price)}</h2>
      </div>
      {/* details Information*/}
      <div className="my-2 w-full">
        <h1 className="text-DarkBlue">{t(detailInfoVariant?.[variant])}:</h1>
        {Detail?.map((item, index) => (
          <div key={index} className="w-full py-2 flex items-center border-b">
            {item.iconDetail}
            <div className="w-full !text-sm">
              <span className="float-start mx-3 text-GrayishPurple  mt-0.5">{t(item.titleDetail)}</span>
              <span dir={i18n.language === 'fa' ? 'ltr' : 'rtl'} className="float-start h-5 !text-sm text-gray-400">{item.countDetail}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-md:flex max-sm:block justify-evenly mt-0">
        {/* Payment Box */}
        <div className={`border-b py-2 pb-4 ${styleDisplay}`}>
          <h1 className="text-sm text-DarkBlue">{t('Payment')}</h1>
          <img src={paymentIcon} alt="Payment Icon" className="h-6 mt-2" />
        </div>
        {/* Share Box */}
        {shareBox && (
          <div className="border-b py-4">
            <h1 className="text-sm text-DarkBlue">{t(shareText)}</h1>
            <div className="flex justify-around mt-2">
              {AppIcons.map((item, index) => <CreateSocialMediaItems key={index} Icon={item} style="bg-neutral-200" />)}
            </div>
          </div>
        )}
      </div>
      <CustomButton isClick={itemReserve} arrowColor={arrowColor} vType={"button"} vStyle={colorButton} text={btnText} style="mb-2 mt-6 border-2 border-black" />
    </div>
  )
}

export default DetailsBox