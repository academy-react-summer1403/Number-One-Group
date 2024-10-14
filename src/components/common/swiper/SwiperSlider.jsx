import { Swiper } from 'swiper/react';
import 'swiper/css';
import { Fragment, useRef } from 'react';
import ButtonSlider from './ButtonSlider';

const SwiperSlider = ({ Breakpoints, perView, children, arrowColor, buttonColor, buttonSideRight, buttonSideLeft, ...props }) => {
    const sliderRef = useRef()
    return (
        <Fragment>
            <ButtonSlider side="right" style={`reverse-img ${buttonSideRight} ${buttonColor}`} arrowColor={arrowColor} click={sliderRef} />
            <Swiper
                spaceBetween={5}
                slidesPerView={perView}
                breakpoints={Breakpoints}
                dir='rtl'
                ref={sliderRef}
                {...props}
            >
                {children}
            </Swiper>
            <ButtonSlider side="left" style={`${buttonSideLeft} ${buttonColor}`} arrowColor={arrowColor} click={sliderRef} />
        </Fragment>
    )
}

export default SwiperSlider
