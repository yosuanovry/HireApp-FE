import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./cardswiper.css";
import { Pagination, Navigation } from "swiper";
import harryst from "../../Assets/LandingPage/harryst.png"
import nialh from "../../Assets/LandingPage/nialh.png"
import louisth from "../../Assets/LandingPage/louisth.png"

export default function App() {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card">
            <div className="card-content">
              <div className="image">
                <img className="rounded-circle border border-warning border-5" src={harryst} alt=""/>
              </div>
              <div className="name">
                <h4 style={{marginTop:'15px', fontSize:'30px', fontWeight:'600'}}>Harry Styles</h4>
                  <h6 style={{color:'#9EA0A5'}}>Web Developer</h6>
                  <h6 style={{marginTop:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
            <div className="card-content">
              <div className="image">
                <img className="rounded-circle border border-warning border-5" src={nialh} alt=""/>
              </div>
              <div className="name">
                <h4 style={{marginTop:'15px', fontSize:'30px', fontWeight:'600'}}>Niall Horan</h4>
                  <h6 style={{color:'#9EA0A5'}}>Web Developer</h6>
                  <h6 style={{marginTop:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
            <div className="card-content">
              <div className="image">
                <img className="rounded-circle border border-warning border-5" src={louisth} alt=""/>
              </div>
              <div className="name">
                <h4 style={{marginTop:'15px', fontSize:'30px', fontWeight:'600'}}>Louis Tomlin</h4>
                  <h6 style={{color:'#9EA0A5'}}>Web Developer</h6>
                  <h6 style={{marginTop:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
            <div className="card-content">
              <div className="image">
                <img className="rounded-circle border border-warning border-5" src={harryst} alt=""/>
              </div>
              <div className="name">
                <h4 style={{marginTop:'15px', fontSize:'30px', fontWeight:'600'}}>Harry Styles</h4>
                  <h6 style={{color:'#9EA0A5'}}>Web Developer</h6>
                  <h6 style={{marginTop:'20px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In euismod ipsum et dui rhoncus auctor.
                  </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
      

    </>
  );
}