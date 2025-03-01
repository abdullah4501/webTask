import React, { useState } from 'react';
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Grid from "@mui/joy/Grid";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import bg1 from '../dist/img/Geirangefjord-1.jpg';
import bg2 from '../dist/img/fotostop.jpg';
import bg3 from '../dist/img/ein.jpg';
import cardbg1 from '../dist/img/cardbg1.jpg';
import cardbg2 from '../dist/img/cardbg2.jpg';
import cardbg3 from '../dist/img/Reiseziel_Italien-1.jpg';
import cardbg4 from '../dist/img/Reiseziel_Spanien-1.jpg';
import bookImg from '../dist/img/book.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
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
            <h2 className='section-heading text-center'>Erleben Sie mit uns richtigen Winter in Norwegen</h2>
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="swipe_cards"
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
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-5">
                        <PhotoCameraBackIcon fontSize="large" style={{color:'#C41716'}}/>
                        <h6 className='inner_subheading mt-3'>Lorem ipsum dolor sit amet consectetur.</h6>
                        <h3 className='inner_heading mt-1'> Kaum einer bietet Ihnen ein so umfangreiches und hochwertiges Norwegen-Programm wie wir.</h3>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
                        <SwiperSlide>
                            <img src={bg1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bg2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bg3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bg1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={bg2} alt="" />
                        </SwiperSlide>
                    </Swiper>
                    <div className="ref">
                        <p>Fotostopp auf dem Bjørnfjell zwischen Norwegen und Schweden.</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='katalog' style={{ padding: "40px 0" }}>
            <div className="container">
                <div className="row row align-items-center">
                    <div className='col-lg-6 col-md-6 col-sm-12  d-flex justify-content-center'>
                        <div className='book'>
                            <img src={bookImg} alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                        <div className="content ">
                            <h2 className='inner_heading text-light mb-3'>Unser neuer Katalog ,,Erlebnisreisen 2024" ist da.</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis illo perspiciatis voluptatum officia.</p>
                            <div className='actions'>
                                <button className='btn btn_left'>Lorem Ipsum</button>
                                <button className='btn btn_right'>Lorem Ipsum</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='places_grid' style={{ padding: "40px 0" }}>
            <div className="container">
            <h2 className='section-heading text-center'>Unsere Reiseziele im Überblick</h2>
            <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
            >
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg1}
                        srcSet={cardbg1}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Skandinavien
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg2}
                        srcSet={cardbg2}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Deutschland
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%', height: '250px'}}>
                    <CardCover className="layer">
                    <img
                        src={cardbg3}
                        srcSet={cardbg3}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Italien & Malta
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg4}
                        srcSet={cardbg4}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Spanien
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%', height: '250px'}}>
                    <CardCover className="layer">
                    <img
                        src={cardbg3}
                        srcSet={cardbg3}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Italien & Malta
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg4}
                        srcSet={cardbg4}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Spanien
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg1}
                        srcSet={cardbg1}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Skandinavien
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
                <Card component="li" sx={{  flexGrow: 1 }} style={{minWidth:'23%'}}>
                    <CardCover>
                    <img
                        src={cardbg2}
                        srcSet={cardbg2}
                        loading="lazy"
                        alt=""
                    />
                    </CardCover>
                    <CardContent>
                    <Typography
                        level="body-lg"
                        textColor="#fff"
                        sx={{ fontWeight: 'lg', mt: { xs: 12, sm: 18 } }}
                    >
                        Deutschland
                    </Typography>
                    <h4 className='subheading'>lorem ipsum</h4>
                    </CardContent>
                </Card>
            </Box>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-all'>ALLE REISEZIELE ENTDECKEN</button>

            </div>
            </div>
        </div>
        <div className='data-grid' style={{ padding: "40px 0" }}>
            <div className="container border-top border-bottom py-5 ">
                <h2 className='section-heading text-center'>Aktuelles von Blitz-Reisen</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>DER NEUE KATALOG</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>WINTERREISEN NACH NORWEGEN & SCHWEDEN 2024</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>TERMINVORSCHAU 2024</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>MIT DEN NEUEN SCHIFFEN AUF DER POSTSCHIFFROUTE 2024
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>ADVENTS- & WEIHNACHTSREISEN 2023
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3 px-2 d-flex flex-column justify-content-end">
                        <h4 className='inner_heading mb-4 text-dark'>BLUTSPENDEN IN UNSEREM REISEZENTRUM IN OVERATH</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
            </div>

        </div>
        <div className='data-content' style={{ padding: "40px 0" }}>
            <div className="container">
                <div className='content'>
                <h5 className='subheading mt-3 text-center'>Lorem ipsum dolor sit amet consectetur.</h5>
                <h2 className='section-heading text-center'>Busreisen mit Erfahrung, Engagement, Liebe zum Reisen - das sind wir und darauf können Sie vertrauen!</h2>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil odit ea aliquid ullam eos, quas rem fuga vero vitae temporibus eum porro quo cupiditate odio ab, dolorum nostrum consequuntur assumenda. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil odit ea aliquid ullam eos, quas rem fuga vero vitae temporibus eum porro quo cupiditate odio ab, dolorum nostrum consequuntur assumenda.</p>
                <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus neque iste voluptas dolore, consequatur sunt quasi,</p>
                </div>
           
            </div>
        </div>
    </>
  );
};

export default Content;
