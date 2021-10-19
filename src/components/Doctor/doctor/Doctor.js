import React from 'react';
import('./doctor.css')

const Doctor = (props) => {
    const {title,img,name} = props.doctor;
    return (
        <div className="container text-center">
           <div className="card shadow">
            <img  src={img} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h4>Dr.{name}</h4>
                <p className="card-text">{title}</p>
            </div>
            </div> 
        </div>
    );
};

export default Doctor;