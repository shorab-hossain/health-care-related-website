import React from 'react';
import ('./Card.css')

const Card = (props) => {
    const {title,describtion,img} =props.card;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="img-fluid" src={img}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{describtion}</p>
                    <button className="btn px-4 py-2 bg-primary text-light d-flex mx-auto  my-3">Read More</button>
                </div>
             </div>
        </div>
    );
};

export default Card;