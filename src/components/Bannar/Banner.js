import React from 'react';
import { Link } from 'react-router-dom';
import ('./Banner.css')

const Banner = () => {
    return (
        <div className="bannar container">
            <div className="d-flex">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center ms-4 mt-3 ">
                <div>
                <h4 className="fs-3">We are here for you</h4>
                <h1 className="title-main fw-bold">Whats Makes Us <br /> Better,  Makes <br /> you Better</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, architecto!
                </p>
                   <Link to="/Appoinment">
                   <button  className="button btn text-light px-4 py-2 mt-4" style={{background:"#4d72d0"}}>Make Appoinment</button>
                   </Link>
                </div>
            </div>
            <div className="col-lg-6  col-md-12 ">
                <img className="img-fluid mt-4" src="https://demo.web3canvas.com/themeforest/medenin/images/hero-doctor-1.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;