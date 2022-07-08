import React from 'react'

const AboutSection = () => {
    return (
        <div>
            <section id="about-us" className="about-us padd-section">
                <div className="container" data-aos="fade-up">
                    <div className="row d-flex justify-content-around align-items-center">

                        <div className="col-md-5 col-lg-4">
                            <img src="assets/img/about-img.png" alt="About" data-aos="zoom-in" data-aos-delay="100" />
                        </div>

                        <div className="col-md-7 col-lg-5">
                            <div className="about-content" data-aos="fade-left" data-aos-delay="100">

                                <h2><span>About Us</span></h2>
                                <p>
                                    Car Rental Nagpur is Nagpur's largest car rental and taxi service providers. We provide cars on rent with our police verified courteous drivers for weddings, outstation tours, corporate meetings, one day tour in Nagpur and outstation tours from Nagpur to other cities and states all over India.
                                </p>

                                <ul className="list-unstyled">
                                    <li><i className="vi bi-chevron-right"></i>Courteous Police Verified and Friendly Drivers</li>
                                    <li><i className="vi bi-chevron-right"></i>24 X 7 Support</li>
                                    <li><i className="vi bi-chevron-right"></i>Booking in 2 minutes</li>
                                    <li><i className="vi bi-chevron-right"></i>100% Door Step Pickup & Drop Facilities</li>
                                    <li><i className="vi bi-chevron-right"></i>Affordable, Transparent Charges</li>
                                    <li><i className="vi bi-chevron-right"></i>Safest Drive to Destiny</li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutSection