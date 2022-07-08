import React from 'react'
import FeatureCards from '../Pages/Feature/components/FeatureCards'

const FeaturesSection = () => {
    return (
        <div>
            <section id="features" className="padd-section text-center">

                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h2>Why Choose Us?</h2>
                        <p className="separator">These is why our customers asked for our services daily</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">

                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="Courteous Police Verified and Friendly Drivers" description="You don't want to put yourself under the stress of driving on unfamiliar roads while on holiday. Car Wala provides best-in-class service with drivers at competitive rates, far surpassing any self-drive car rental experience. On the trip, sit back, relax, and enjoy time with your mates. Pick-up and drop-off at your door. Our knowledgeable drivers will take you to the best sights, restaurants, and attractions. Billing that is transparent. There are no hidden costs." />
                        
                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="24 X 7 Support" description="We provide 24 X 7 support services for our customers. You may get a car on rent in Nagpur with driver to travel to outstation, to a different city, outskirts of Nagpur, or want to rent a car for wedding, we are available 24 X 7 to offer you the best services at affordable and transparent charges. The charges imposed will be as per the distance travelled and number of passengers. We ensure the safety of our customers during their journey with their loved ones." />
                        
                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="Booking in 2 minutes" description="We believe in fast and transparent services and thus provides an easy on call booking facilites for our customers to book a car on rent in Nagpur or hire a car in just one call. Isn't it amazing! call us now to book a car on rent with us." />
                        
                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="100% Door Step Pickup & Drop Facilities" description="We provide door to door pickup and drop facilities for our customers to ensure their safety in this pandemic. Our verified courteous drivers will pick you up from the communicated location and drop at the same location. We provide both one-way and two-way services depending on the requirements. We give our best to ensure the safety of our customers." />
                        
                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="Affordable, Transparent Charges" description="You can rent a car with driver in Nagpur at a low cost for an hour, a day, or a month, with a variety of travel packages, door pickup, and availability 24 hours a day, 7 days a week. Car Wala assists customers in selecting a best budget car with driver to fit their needs with awesome journey experience." />
                        
                        <FeatureCards imageUrl="assets/img/svg/paint-palette.svg" title="Safest Drive to Destiny" description="We make sure that our cabs are completely cleaned and sanitized after every service. This is to safeguard the safety and hygiene of our drivers, as well as for our customers." />
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesSection