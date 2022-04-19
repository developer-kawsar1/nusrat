import React from 'react';

const Banner = () => {
    return (
        <div>
         <div className="container">
             <div className="row py-5">
                 <div className="col-12 col-md-6 pt-5"> 
                 <h2>I am Ready to helo You </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse corporis ipsam perferendis ullam non modi praesentium alias, aliquid, eum velit ad tempore dignissimos explicabo cupiditate illo totam ex aliquam.</p> 
                    <button className="btn btn-danger">Join NOw</button>
                 </div> 
                 <div className="col-12 col-md-6">
                     <img className='img-fluid' src="https://cdn.create.vista.com/api/media/small/173648048/stock-photo-businessman-talking-on-smartphone" alt="" />
                 </div>
             </div>
         </div>
        </div>
    );
};

export default Banner;