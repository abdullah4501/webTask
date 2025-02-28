import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/navigation";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import HouseIcon from '@mui/icons-material/House';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
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
              <div className="input-group" >
                <span className="input-group-btn h-100">
                  <button className="btn submit_search p-0 mr-3" type="submit">
                      <i className="fas fa-search"></i>
                  </button>
                </span>
                  <input 
                  type="text" 
                  className="form-control h-100" 
                  placeholder="Reise finden"
                  />
              </div>
              <Select
                placeholder="Select"
                startDecorator={<HouseIcon />}
                indicator={<KeyboardArrowDown sx={{ color: "#ccc" }} />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="thee">Three</Option>
                <Option value="four">Four</Option>
              </Select>
              {/* <div className="input-group" > */}
              <Select
                placeholder="Select"
                startDecorator={<TravelExploreIcon />}
                indicator={<KeyboardArrowDown sx={{ color: "#ccc" }} />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="thee">Three</Option>
                <Option value="four">Four</Option>
              </Select>
              <Select
                placeholder="Select"
                startDecorator={<CalendarMonthIcon />}
                indicator={<KeyboardArrowDown sx={{ color: "#ccc" }} />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                      transform: 'rotate(-180deg)',
                    },
                  },
                }}
              >
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="thee">Three</Option>
                <Option value="four">Four</Option>
              </Select>
              {/* </div> */}
                <button className="input-group btn filter-btn" style={{width: '15%'}}>Find</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
