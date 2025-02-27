import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from '../dist/img/logo.jpg';

const Header = () => {
  return (
      <header>
        {/* <div className="container"> */}
            <div className="top_area ">

                <nav className="navbar navbar-expand-lg bg-transparent">
                    <div className="container">
                        <a href="/">
                            <img 
                                src={Logo}
                                style={{ height: "60px", margin: "20px", marginLeft: "0" }} 
                                alt="Logo" 
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse outternav" id="navbarSupportedContent">
                            <div className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <div className="contact_info ">
                                    <span className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </span>
                                    <a href="#" className="hdr_phone">
                                    <i className="fas fa-phone-volume"></i> <span className="info-txt"> 0800 - 36 36 36 6</span>
                                    </a>
                                    <span className="site_header--phone_info"> Lorem ipsum dolor sit amet consectetur</span>
                                </div>
                            </div>
                            <form className="form-inline">
                        <div className="input-group">
                            <input 
                            type="text" 
                            className="form-control " 
                            placeholder="Reise finden"
                            />
                            <span className="input-group-btn">
                            <button className="btn submit_search" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                            </span>
                        </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <hr />
            <div className="bottom_area d-flex">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">FAQ</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Lorem Ipsum</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Lorem Ipsum</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Lorem Ipsum</a></li>
                </ul>
            </div>
        {/* </div> */}
      </header>
  );
};

export default Header;
