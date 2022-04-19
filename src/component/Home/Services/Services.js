import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => { 

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="row"> 
         <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="container ">
             
                  <div className="row mx-auto py-3 ">
                  {
                services.map(service =><Service   key={service.id}
                    service={service} />)
            }
                  </div>
             
            </div>
        </div>
    );
};

export default Services;