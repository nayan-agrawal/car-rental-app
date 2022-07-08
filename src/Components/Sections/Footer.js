import { useState, useEffect } from 'react'

const Footer = () => {

    /**
    * Back to top button
    */
    const toggleBacktotop = () => {
        let backtotop = document.querySelector('.back-to-top');
        if (backtotop) {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
    }

    useEffect(() => {
        window.addEventListener('load', toggleBacktotop)
        document.addEventListener('scroll', toggleBacktotop)
    }, []);

    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-lg-4">
                            <div className="footer-logo">

                                <a href="/"><img src="assets/img/logo.png" alt="" title="" className='mb-3' width="20%" /></a>
                                <p>
                                    Car Rental Nagpur is Nagpur's largest car rental and taxi service providers. We provide cars on rent with our police verified courteous drivers for weddings, outstation tours, corporate meetings, one day tour in Nagpur and outstation tours from Nagpur to other cities and states all over India.
                                </p>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <div className="list-menu">

                                <h4>Abou Us</h4>

                                <ul className="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Features item</a></li>
                                    <li><a href="#">Live streaming</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <div className="list-menu">

                                <h4>Abou Us</h4>

                                <ul className="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Features item</a></li>
                                    <li><a href="#">Live streaming</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <div className="list-menu">

                                <h4>Support</h4>

                                <ul className="list-unstyled">
                                    <li><a href="#">faq</a></li>
                                    <li><a href="#">Editor help</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2">
                            <div className="list-menu">

                                <h4>Abou Us</h4>

                                <ul className="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Features item</a></li>
                                    <li><a href="#">Live streaming</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="copyrights">
                    <div className="container">
                        <p>&copy; Copyrights Car Rental Nagpur. All rights reserved.</p>
                        <div className="credits">
                            Designed by <a href="">Car Rental Nagpur</a>
                        </div>
                    </div>
                </div>

            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Footer