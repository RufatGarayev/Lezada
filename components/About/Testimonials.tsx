import React from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image';

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
        },
        {
            id: 4,
            img: <Image src="/../public/images/testimonials/testimonial-4.jpg" alt="logo" layout='fill' />,
            title: "Anais Coulon",
            position: "Actor",
            text: "Five-star for good customer support. They have the ability to resolve any issue in less than the time for a coffee cup."
        }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1100, min: 800 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 800, min: 0 },
            items: 1
        }
    };

    return (
        <section id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Testimonial</h1>
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    transitionDuration={200}
                    arrows={false}
                >
                    {
                        TestimonialsData.map(slide => (
                            <div key={slide.id} className="slide-item">
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
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
};

export default Testimonials;