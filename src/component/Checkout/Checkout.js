import React from "react";

const Checkout = () => {
  return (
    <div className="container">
      <div className="row my-5 ">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card">
            <h2 className=" mt-3 text-center">Checkout page </h2>
            <div className="card-body">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="name">Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div class="form-group">
                <label for="name">phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="phone"
                />
              </div>

              <button className="btn btn-primary d-block w-100 mt-5 ">Complete order </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
