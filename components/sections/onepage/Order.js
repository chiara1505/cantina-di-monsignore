import React from 'react';

export default function Order () {
    return (
        <section className="order-section bg-color-2">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
            <div className="shape">
                <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
                <div className="shape-3" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title centred mb_50">
                    <span className="sub-title">Table Booking</span>
                    <h2>Pre-Order to Make a <br />Reservation</h2>
                </div>
                <div className="form-inner">
                    <form action="/" method="post">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input type="text" name="name" placeholder="Full name" required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input type="email" name="email" placeholder="Email address" required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input type="text" name="phone" placeholder="Phone number" required />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                    <select className="wide">
                                        <option data-display="Occasion">Occasion</option>
                                        <option value="1">Occasion 01</option>
                                        <option value="2">Occasion 02</option>
                                        <option value="3">Occasion 03</option>
                                        <option value="3">Occasion 04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                    <select className="wide">
                                       <option data-display="Preferred food">Preferred food</option>
                                       <option value="1">Preferred food 01</option>
                                       <option value="2">Preferred food 02</option>
                                       <option value="3">Preferred food 03</option>
                                       <option value="3">Preferred food 04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                    <select className="wide">
                                       <option data-display="Number of persons">Number of persons</option>
                                       <option value="1">Number of persons 01</option>
                                       <option value="2">Number of persons 02</option>
                                       <option value="3">Number of persons 03</option>
                                       <option value="3">Number of persons 04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="select-box">
                                    <select className="wide">
                                       <option data-display="Booking type">Booking type</option>
                                       <option value="1">Booking type 01</option>
                                       <option value="2">Booking type 02</option>
                                       <option value="3">Booking type 03</option>
                                       <option value="3">Booking type 04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <div className="icon"><i className="icon-13"></i></div>
                                <input type="text" name="date" placeholder="Tour Date" id="datepicker" />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <textarea name="message" placeholder="Special request"></textarea>
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

