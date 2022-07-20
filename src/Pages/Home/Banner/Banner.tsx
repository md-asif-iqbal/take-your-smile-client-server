import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
const Fade = require("react-reveal/Fade")

const Banner = () => {
    return (
      <div id='home'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/H4D8BLG/img1.jpg" alt=""  className='h-[80vh]'/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className='relative'>
          <img src="https://i.ibb.co/SxNNYMk/img2.jpg" alt=""  className='h-[80vh]'/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
            
          
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/SfJvM8P/img3.jpg" alt=""  className='h-[80vh]'/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
          <img src="https://i.ibb.co/SxNNYMk/img2.jpg" alt=""  className='h-[80vh]'/>
          <div className=" absolute top-1/2 left-1/4 h-24  flex justify-center items-center">
              <Fade bottom>
                <div className="flex items-start">
                  <h1 className="md:text-6xl text-2xl font-bold text-white">
                    Visualize, Customize,
                    <br /> Actualize.
                  </h1>
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;