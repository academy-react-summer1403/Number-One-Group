import { Swiper } from 'swiper/react';
import 'swiper/css';
import { Fragment, useRef } from 'react';
import ButtonSlider from './ButtonSlider';

const SwiperSlider = ({ Breakpoints, modules, perView, children, arrowColor, buttonColor, buttonSideRight, buttonSideLeft }) => {
    const sliderRef = useRef()
    return (
        <Fragment>
            <ButtonSlider side="right" style={`reverse-img ${buttonSideRight} ${buttonColor}`} arrowColor={arrowColor} click={sliderRef} />
            <Swiper
                modules={modules}
                spaceBetween={5}
                slidesPerView={perView}
                breakpoints={Breakpoints}
                dir='rtl'
                ref={sliderRef}
                
            >
                {children}
            </Swiper>
            <ButtonSlider side="left" style={`${buttonSideLeft} ${buttonColor}`} arrowColor={arrowColor} click={sliderRef} />
        </Fragment>
    )
}

export default SwiperSlider
