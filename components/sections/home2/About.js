'use client'
import React from 'react';
export default function About()  {
  return (
    <section className="about-style-two sec-pad">
      <div className="shape">
        <div className="shape-1" style={{ backgroundImage: 'url(assets/images/shape/shape-24.png)' }}></div>
        <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-25.png)' }}></div>
      </div>
      <div className="auto-container">
        <div className="sec-title centred mb_40">
          <span className="sub-title">About Us</span>
          <h2>Traditional & Modern Service <br />Since <span>1970</span></h2>
        </div>
        <div className="text-inner p_relative d_block mb_60">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text mr_30">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.</p>
                <p>Maecenas mattis facilisi erat odio at. Quisque nullam nunc tincidunt ante. Etiam eget augue velit ultricies amet.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text ml_30">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat pellentesque blandit sodales arcu. Auctor gravida vel et tempus. Malesuada erat dolor magna luctus congue leo tellus mattis. Volutpat neque, erat nis donec sed urna aliquet.</p>
                <p>Maecenas mattis facilisi erat odio at. Quisque nullam nunc tincidunt ante. Etiam eget augue velit ultricies amet.</p>
              </div>
            </div>
          </div>
        </div>
        <figure className="signature centred"><img src="assets/images/icons/signature-1.png" alt="" /></figure>
      </div>
    </section>
  );
};

