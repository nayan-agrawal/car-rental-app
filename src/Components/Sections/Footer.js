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

                                <a className="navbar-brand" href="#">eStartup</a>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

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
                        <p>&copy; Copyrights eStartup. All rights reserved.</p>
                        <div className="credits">
                            Designed by <a href="">Car Rental Website</a>
                        </div>
                    </div>
                </div>

            </footer>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Footer