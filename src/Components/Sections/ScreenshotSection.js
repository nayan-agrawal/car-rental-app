// import Swiper core and required modules
import { Pagination, Mousewheel, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ScreenshotSection = () => {

    return (
        <div>
            <section id="screenshots" className="padd-section text-center">

                <div className="container" data-aos="fade-up">
                    <div className="section-title text-center">
                        <h2>Our Car Inventory</h2>
                        <p className="separator">We have a large collection of cars for all your needs.</p>
                    </div>

                    <Swiper
                        modules={[Pagination, Mousewheel, Autoplay]}
                        spaceBetween={50}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            575: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            }
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide><img src="assets/img/screen/audi-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/ertiga-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/honda-amaze-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/innova-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/mercedes-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/suv-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/swift-dzire-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/Tata-Indigo-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/tata-sumo-car-rental.jpg" className="img-fluid" alt="" /></SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </div>
    )
}

export default ScreenshotSection