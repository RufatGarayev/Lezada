import React from 'react';
import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

SwiperCore.use([A11y]);

interface IBrands {
    id: number;
    img: JSX.Element;
};

const Brands: React.FC = () => {
    const Brands: IBrands[] = [
        { id: 1, img: <Image src="/../public/images/brands/logo-1.png" alt="logo" layout='fill' /> },
        { id: 2, img: <Image src="/../public/images/brands/logo-2.png" alt="logo" layout='fill' /> },
        { id: 3, img: <Image src="/../public/images/brands/logo-3.png" alt="logo" layout='fill' /> },
        { id: 4, img: <Image src="/../public/images/brands/logo-4.png" alt="logo" layout='fill' /> },
        { id: 5, img: <Image src="/../public/images/brands/logo-5.png" alt="logo" layout='fill' /> },
        { id: 6, img: <Image src="/../public/images/brands/logo-6.png" alt="logo" layout='fill' /> }
    ];

    return (
        <section id="brands">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Our Brands</h1>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    breakpoints={{
                        "320": {
                            "slidesPerView": 1,
                            "spaceBetween": 50
                        },
                        "576": {
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        },
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        },
                        "992": {
                            "slidesPerView": 4,
                            "spaceBetween": 50
                        },
                        "1200": {
                            "slidesPerView": 5,
                            "spaceBetween": 50
                        }
                    }}
                >
                    {
                        Brands.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <div className="brand-logo">
                                    {slide.img}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
};

export default Brands;