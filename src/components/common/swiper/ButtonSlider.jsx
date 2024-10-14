import { ArrowLeftIcon } from "../../../core/icon"

const ButtonSlider = ({ style, arrowColor, click, side }) => {
    return (
        <div onClick={() => { side === "left" ? click.current.swiper.slidePrev() : click.current.swiper.slideNext() }} className={`absolute cursor-pointer rounded-full flex justify-center items-center border border-black buttonSwiper_shadow ${style}`}>
            <ArrowLeftIcon stroke={arrowColor} />
        </div>
    )
}

export default ButtonSlider