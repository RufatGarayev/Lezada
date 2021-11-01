import React from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image';

interface IBrands {
    id: number;
    img: string;
};

const Brands: React.FC = () => {
    const Brands: IBrands[] = [
        { id: 1, img: "/images/brands/logo-1.png" },
        { id: 2, img: "/images/brands/logo-2.png" },
        { id: 3, img: "/images/brands/logo-3.png" },
        { id: 4, img: "/images/brands/logo-4.png" },
        { id: 5, img: "/images/brands/logo-5.png" },
        { id: 6, img: "/images/brands/logo-6.png" }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1023, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2
        }
    };

    return (
        <section id="brands">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h1>Our Brands</h1>
                    </div>
                </div>
                <Carousel
                    responsive={responsive}
                    customTransition="all .5"
                    arrows={false}
                >
                    {
                        Brands.map(slide => (
                            <div key={slide.id} className="brand-logo">
                                <Image src={slide.img} alt="logo" layout='fill' />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
};

export default Brands;