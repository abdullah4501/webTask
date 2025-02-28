import React, { useRef, useState } from 'react';
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import bg1 from '../dist/img/Geirangefjord-1.jpg';
import bg2 from '../dist/img/fotostop.jpg';
import bg3 from '../dist/img/ein.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(3), // Increased padding
  textAlign: "center",
  borderRadius: "8px", // Larger border-radius for a modern look
  color: theme.vars.palette.text.secondary,
  fontSize: "1.2rem",
  fontWeight: "bold",
  boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)", // Subtle hover effect
  },
  ...theme.applyStyles("dark", {
  }),
}));

const Content = () => {
  return (
    <>
        <div style={{ padding: "40px 0" }}>
            <div className="container">
                <Grid
                container
                spacing={3}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ flexGrow: 1, justifyContent: "center" }}
                >
                <Grid xs={4} sm={4} md={4} >
                    <Item className=" card-bg d-flex align-items-end" style={{backgroundImage: `url(${bg1})`, height: '255px'}}>
                    <div className="card image-card" >
                        <div className="card-body text-left p-0">
                            <h5 className="card-title">Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen</h5>
                            <h6 className="card-subtitle mb-2">Lorem ipsum, dolor sit amet.</h6>
                            <button className=" btn-card">Lorem Ipsum</button>
                        </div>
                    </div>
                    </Item>
                </Grid>
                <Grid xs={4} sm={4} md={4} >
                    <Item className=" card-bg d-flex align-items-end" style={{backgroundImage: `url(${bg2})`, height: '255px'}}>
                    <div className="card image-card" >
                        <div className="card-body text-left p-0">
                            <h5 className="card-title">Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen</h5>
                            <h6 className="card-subtitle mb-2">Lorem ipsum, dolor sit amet.</h6>
                            <button className=" btn-card">Lorem Ipsum</button>
                        </div>
                    </div>
                    </Item>
                </Grid>
                <Grid xs={4} sm={4} md={4} >
                    <Item className=" card-bg d-flex align-items-end" style={{backgroundImage: `url(${bg3})`, height: '255px'}}>
                    <div className="card image-card" >
                        <div className="card-body text-left p-0">
                            <h5 className="card-title">Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen</h5>
                            <h6 className="card-subtitle mb-2">Lorem ipsum, dolor sit amet.</h6>
                            <button className=" btn-card">Lorem Ipsum</button>
                        </div>
                    </div>
                    </Item>
                </Grid>
                </Grid>
            </div>
        </div>
        <div className="section_slide" style={{ padding: "40px 0" }}>
            <div className="container">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                >
                <SwiperSlide>
                    <div className="card">
                    <img className="card-img-top" src={bg1} alt="Card image cap" />
                    <div className="card-body text-left">
                        <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
                        Lorem ipsum
                        </h6>
                        <h5 className="card-title" style={{ color: "#535353" }}>
                        Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen
                        </h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body row align-items-baseline">
                        <div className="col-6 text-left card-col-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item tag">17 Tags</li>
                            <li className="list-group-item date">
                            <i className="fas fa-circle" style={{ color: "#2aff2a", fontSize: "12px" }}></i> 22.02 - 09.03.24
                            </li>
                        </ul>
                        </div>
                        <div className="col-6 text-right card-col-right">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item total">ab 778 €</li>
                            <li className="list-group-item desc">Lorem ipsum</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body text-left">
                        <button className="btn btn-card">Lorem Ipsum</button>
                    </div>
                    </div>
                </SwiperSlide>

                {/* Repeat similar structure for other slides */}
                <SwiperSlide>
                    <div className="card">
                    <img className="card-img-top" src={bg1} alt="Card image cap" />
                    <div className="card-body text-left">
                        <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
                        Lorem ipsum
                        </h6>
                        <h5 className="card-title" style={{ color: "#535353" }}>
                        Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen
                        </h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body row align-items-baseline">
                        <div className="col-6 text-left card-col-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item tag">17 Tags</li>
                            <li className="list-group-item date">
                            <i className="fas fa-circle" style={{ color: "#2aff2a", fontSize: "12px" }}></i> 22.02 - 09.03.24
                            </li>
                        </ul>
                        </div>
                        <div className="col-6 text-right card-col-right">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item total">ab 778 €</li>
                            <li className="list-group-item desc">Lorem ipsum</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body text-left">
                        <button className="btn btn-card">Lorem Ipsum</button>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                    <img className="card-img-top" src={bg1} alt="Card image cap" />
                    <div className="card-body text-left">
                        <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
                        Lorem ipsum
                        </h6>
                        <h5 className="card-title" style={{ color: "#535353" }}>
                        Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen
                        </h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body row align-items-baseline">
                        <div className="col-6 text-left card-col-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item tag">17 Tags</li>
                            <li className="list-group-item date">
                            <i className="fas fa-circle" style={{ color: "#2aff2a", fontSize: "12px" }}></i> 22.02 - 09.03.24
                            </li>
                        </ul>
                        </div>
                        <div className="col-6 text-right card-col-right">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item total">ab 778 €</li>
                            <li className="list-group-item desc">Lorem ipsum</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body text-left">
                        <button className="btn btn-card">Lorem Ipsum</button>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                    <img className="card-img-top" src={bg1} alt="Card image cap" />
                    <div className="card-body text-left">
                        <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
                        Lorem ipsum
                        </h6>
                        <h5 className="card-title" style={{ color: "#535353" }}>
                        Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen
                        </h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body row align-items-baseline">
                        <div className="col-6 text-left card-col-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item tag">17 Tags</li>
                            <li className="list-group-item date">
                            <i className="fas fa-circle" style={{ color: "#2aff2a", fontSize: "12px" }}></i> 22.02 - 09.03.24
                            </li>
                        </ul>
                        </div>
                        <div className="col-6 text-right card-col-right">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item total">ab 778 €</li>
                            <li className="list-group-item desc">Lorem ipsum</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body text-left">
                        <button className="btn btn-card">Lorem Ipsum</button>
                    </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card">
                    <img className="card-img-top" src={bg1} alt="Card image cap" />
                    <div className="card-body text-left">
                        <h6 className="card-subtitle mb-2" style={{ color: "#ccc" }}>
                        Lorem ipsum
                        </h6>
                        <h5 className="card-title" style={{ color: "#535353" }}>
                        Neuues Prospekt: Mit Blitz Reisen und den 4 neuen Havila-Schiffen
                        </h5>
                        <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-body row align-items-baseline">
                        <div className="col-6 text-left card-col-left">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item tag">17 Tags</li>
                            <li className="list-group-item date">
                            <i className="fas fa-circle" style={{ color: "#2aff2a", fontSize: "12px" }}></i> 22.02 - 09.03.24
                            </li>
                        </ul>
                        </div>
                        <div className="col-6 text-right card-col-right">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item total">ab 778 €</li>
                            <li className="list-group-item desc">Lorem ipsum</li>
                        </ul>
                        </div>
                    </div>
                    <div className="card-body text-left">
                        <button className="btn btn-card">Lorem Ipsum</button>
                    </div>
                    </div>
                </SwiperSlide>
                </Swiper>
            </div>
        </div>

        <div className='section_ship' style={{ padding: "40px 0" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <PhotoCameraBackIcon fontSize="large"/>
                        <h6 className='inner_subheading mt-3'>Lorem ipsum dolor sit amet consectetur.</h6>
                        <h3 className='inner_heading mt-1'> Kaum einer bietet Ihnen ein so umfangreiches und hochwertiges Norwegen-Programm wie wir.</h3>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
};

export default Content;
