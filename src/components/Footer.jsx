import React from "react";
import logo from '../dist/img/logo.jpg'

const Footer = () => {
    return(
        <footer className="footer" style={{ padding: "40px 0" }}>
            <div className="container">
                <div className="footer-upper">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="contact_info">
                        <span className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </span>
                        <a href="#" className="hdr_phone">
                            <i className="fas fa-phone-volume"></i> <span className="info-txt"> 0800 - 36 36 36 6</span>
                        </a>
                        <span className="site_header--phone_info"> Lorem ipsum dolor sit amet consectetur</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mr-auto d-none d-lg-block d-xl-block">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                        <ul className="contact-footer">
                            <li>
                                Name: <span>lorem ipsum</span>
                            </li>
                            <li>
                                Contact: <span>00 000 00000</span>
                            </li>
                            <li>
                                Email: <span>admin@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8 d-none d-lg-block d-xl-block">
                        <div className="row mt-3">

                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p>
                                <a href="#!" className="text-reset">Angular</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">React</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Vue</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Laravel</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
export default Footer;