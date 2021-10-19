import React, { useEffect, useState } from 'react';
import Doctor from './doctor/Doctor';
import('./Doctors.css')

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    useEffect(() =>{
        fetch('./doctor.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
            <div className="container ">
                <p className="text-center mt-5 text-primary">our Team</p>
                <h1 className="text-center">Our Dedicated Doctors</h1>
                <div className="card-container mb-5 mt-5 ">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
    );
};

export default Doctors;