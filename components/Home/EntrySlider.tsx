import React from 'react';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

SwiperCore.use([Navigation, A11y]);

interface IEntrySliderData {
    id: number;
    img: JSX.Element;
    smallTitle: string;
    bigTitle: string;
};

const EntrySlider: React.FC = () => {
    const EntrySliderData: IEntrySliderData[] = [
        {
            id: 1,
            img: <Image src="/../public/images/entry-slider/entry-slide1.jpg" alt="logo" layout='fill' />,
            smallTitle: "ACCESSORIES",
            bigTitle: "Bottle Grinder, Small, 2-Piece"
        },
        {
            id: 2,
            img: <Image src="/../public/images/entry-slider/entry-slide2.jpg" alt="logo" layout='fill' />,
            smallTitle: "HANDMADE",
            bigTitle: "Large, Food board"
        },
        {
            id: 3,
            img: <Image src="/../public/images/entry-slider/entry-slide3.jpg" alt="logo" layout='fill' />,
            smallTitle: "ACCESSORIES",
            bigTitle: "Tribeca Hubert, Pendant"
        }
    ];

    return (
        <section id="entry-slider">
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    navigation
                >
                    {
                        EntrySliderData.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <div className="slide-item">
                                    {slide.img}
                                    <div className="slide-content">
                                        <h6>{slide.smallTitle}</h6>
                                        <h1>{slide.bigTitle}</h1>
                                        <div className="link">
                                            <Link href="/shop">
                                                <a>Shop Now</a>
                                            </Link>
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

export default EntrySlider;