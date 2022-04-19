import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => { 
  const {id, name, img, description, price} = service;
    return (
        <div className="card col-10 col-md-3 mt-3 me-3 mx-auto" >
        <img className="card-img-top" src={img} alt="img top" />
        <div className="card-body">
          <h5 className="card-title">name</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <div className='d-flex justify-content-between border p-2 rounded' >
             <p className='fs-4'> {price}</p> 
             <Link to="checkout" className="btn btn-primary pt-2">Buy service</Link>
           </div>
        </div> 
      
      </div>
    );
};

export default Service;