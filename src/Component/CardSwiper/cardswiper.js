import React from "react";
// import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// import nialh from "../../Assets/nialh.png"
import harryst from "../../Assets/LandingPage/harryst.png"
// import louisth from "../../Assets/louisth.png"
import "./cardswiper.css"

export default function CardSwiper() {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    pagination={{clickable: true}}
    scrollbar={{draggable: true}}
    loop={true}
    loopFillGroupWithBlank={true}
    navigation={true}
  >
    
    <SwiperSlide className="slide">
        <div className="slide-content">
            <div className="user-image">
                <img src={harryst} alt="" className="user-photo"/>
            </div>
        </div>

    </SwiperSlide>
      
  </Swiper>
)
}
