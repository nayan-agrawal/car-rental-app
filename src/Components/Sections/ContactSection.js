import React from 'react'

const ContactSection = () => {
    return (
        <div>
            <section id="contact" className="padd-section">

                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h2>Contact</h2>
                        {/* <p className="separator">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p> */}
                    </div>

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="100">

                        <div className="col-lg-3 col-md-4">

                            <div className="info">
                                <div>
                                    <i className="bi bi-geo-alt"></i>
                                    <p>Ho No. 531/A/28 <br /> Gujarwadimothi Vihir <br /> Nagpur - 440012</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <p>info@carrentalnagpur.in.net</p>
                                </div>

                                <div>
                                    <i className="bi bi-phone"></i>
                                    <p><a href="tel: +919423959655">+91 9423 9596 55</a></p>
                                </div>
                            </div>

                            {/* <div className="social-links">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div> */}

                        </div>

                        <div className="col-lg-6 col-md-8">
                            {/* <div className="form">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div> */}
                            
                            <iframe className="mb-4 mb-lg-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2542719862286!2d79.08380651493526!3d21.18205568591554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaa48b6553e601855!2sCar%20Rental%20Services!5e0!3m2!1sen!2sin!4v1635602607206!5m2!1sen!2sin"
                                frameborder="0" style={{ border: "0", width: "100%", height: "384px" }} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactSection