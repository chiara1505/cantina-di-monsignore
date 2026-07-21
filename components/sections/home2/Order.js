import React from 'react';

export default function Order() {
  return (
    <section className="order-style-two sec-pad">
      <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
      <div className="shape">
        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-30.png)" }}></div>
        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
        <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-32.png)" }}></div>
        <div className="shape-4" style={{ backgroundImage: "url(assets/images/shape/shape-33.png)" }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred mb_45">
          <span className="sub-title">Table Booking</span>
          <h2>Pre-Order to Make a <br />Reservation</h2>
        </div>
        <div className="form-inner">
          <form action="index-2" method="post">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                <input type="text" name="name" placeholder="Full name" required />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 form-group">
                <div className="icon"><i className="icon-13"></i></div>
                <input type="text" name="date" placeholder="Booking date" id="datepicker" />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                <div className="select-box">
                  <select className="wide">
                    <option data-display="Number of persons">Number of persons</option>
                    <option value="1">03</option>
                    <option value="2">04</option>
                    <option value="3">05</option>
                    <option value="3">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                <button type="submit" className="theme-btn-one">Make a Reservation</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

