import React from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image';

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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1100, min: 500 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
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
                                {slide.img}
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
};

export default Brands;