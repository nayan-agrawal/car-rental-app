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
                        <h2>App Gallery</h2>
                        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
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
                        <SwiperSlide><img src="assets/img/screen/1.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/2.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/3.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/4.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/5.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/6.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/7.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/img/screen/8.jpg" className="img-fluid" alt="" /></SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </div>
    )
}

export default ScreenshotSection