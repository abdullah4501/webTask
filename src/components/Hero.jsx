import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation";

// Ensure the image is correctly placed inside `src/assets/img/`
import HeroBanner from "../dist/img/hero-banner.jpg"; 

const Hero = () => {
  return (
    <>
      <div style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
        <Swiper
          navigation={true} // Enables navigation
          modules={[Navigation]} // Adds Navigation functionality
          className="mySwiper"
          style={{ overflow: "hidden" }} // Optional styling
        >
          <SwiperSlide>
            <img 
              src={HeroBanner} 
              alt="Hero Banner" 
              style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={HeroBanner}  
              alt="Slide 2" 
              style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            />
          </SwiperSlide>
          <SwiperSlide>
            <img 
              src={HeroBanner} 
              alt="Slide 3" 
              style={{ width: "100%", height: "auto", objectFit: "cover" }} 
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="filters">
        <div className="container">
          <form className="form-inline">
              <div className="input-group" style={{width: '100%'}}>
                <span className="input-group-btn">
                  <button className="btn submit_search" type="submit">
                      <i className="fas fa-search"></i>
                  </button>
                </span>
                  <input 
                  type="text" 
                  className="form-control " 
                  placeholder="Reise finden"
                  />
              </div>
              <div className="input-group" style={{width: '100%'}}>
                <span className="input-group-btn">
                  <button className="btn submit_search" type="submit">
                      <i className="fas fa-search"></i>
                  </button>
                </span>
                  <input 
                  type="text" 
                  className="form-control " 
                  placeholder="Reise finden"
                  />
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
