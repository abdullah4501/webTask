import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation";

// Ensure the image is correctly placed inside `src/assets/img/`
import HeroBanner from "../dist/img/hero-banner.jpg"; 

const Hero = () => {
  return (
    <div style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
      <Swiper
        navigation={true} // Enables navigation
        modules={[Navigation]} // Adds Navigation functionality
        className="mySwiper"
        style={{ borderRadius: "10px", overflow: "hidden" }} // Optional styling
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
  );
};

export default Hero;
