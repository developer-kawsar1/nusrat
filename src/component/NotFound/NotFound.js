import React from 'react';
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center ">
                        <h1 className='text-center'> sorry Page not found</h1>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <img src={notFound} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;