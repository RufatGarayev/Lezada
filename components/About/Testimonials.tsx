import React from 'react';
import SwiperCore, { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

SwiperCore.use([A11y]);

interface ITestimonialsData {
    id: number;
    img: JSX.Element;
    title: string;
    position: string;
    text: string;
};

const Testimonials: React.FC = () => {
    const TestimonialsData: ITestimonialsData[] = [
        {
            id: 1,
            img: <Image src="/../public/images/testimonials/testimonial-1.png" alt="logo" layout='fill' />,
            title: "Sally Ramsey",
            position: "Reporter",
            text: "I can say your dedication is second to none. I like the fact that you are strongly proud of your work in every way."
        },
        {
            id: 2,
            img: <Image src="/../public/images/testimonials/testimonial-2.jfif" alt="logo" layout='fill' />,
            title: "Lois Thompson",
            position: "Actor",
            text: "This has already been my fifth-time purchasing their theme. I have been highly satisfied with their work."
        },
        {
            id: 3,
            img: <Image src="/../public/images/testimonials/testimonial-3.jpg" alt="logo" layout='fill' />,
            title: "Florence Pittman",
            position: "Model",
            text: "There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site."
        }
    ];

    return (
        <section id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Testimonial</h1>
                    </div>
                </div>
                <Swiper
                    spaceBetween={15}
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
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        },
                        "992": {
                            "slidesPerView": 2,
                            "spaceBetween": 50
                        },
                        "1200": {
                            "slidesPerView": 3,
                            "spaceBetween": 50
                        }
                    }}
                >
                    {
                        TestimonialsData.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <div className="slide-item">
                                    <div className="text">
                                        <p>{slide.text}</p>
                                    </div>
                                    <div className="info">
                                        <div className="img">
                                            {slide.img}
                                        </div>
                                        <div className="name-and-position">
                                            <h6>{slide.title}</h6>
                                            <p><span>/</span>{slide.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
};

export default Testimonials;