import React, { useState } from 'react';
import Image from 'next/image';

interface Iimages {
    id: number;
    img: any;
};

const ImgSlider: React.FC<any> = ({ product }) => {
    const [clickedBtnId, setClickedBtnId] = useState(1);
    const [slideIndex, setSlideIndex] = useState(1);

    const Images: Iimages[] = [
        {
            id: 1,
            img: <Image src={product.image} alt={product.title} layout="fill" />
        },
        {
            id: 2,
            img: <Image src='/../public/images/products/wooden-chair.jpg' alt={product.title} layout="fill" />
        },
        {
            id: 3,
            img: <Image src='/../public/images/products/wooden-table.jpg' alt={product.title} layout="fill" />
        }
    ];

    return (
        <div className="img-slider">
            <div className="row">
                <div className="col-3">
                    <div className="little-img-wrapper d-flex flex-column justify-content-between">
                        {
                            Images.map(littleImg => (
                                <div
                                    key={littleImg.id}
                                    className={clickedBtnId === littleImg.id ? "img-wrapper active-little-img" : "img-wrapper"}
                                >
                                    <button
                                        onClick={() => {
                                            setClickedBtnId(littleImg.id);
                                            setSlideIndex(littleImg.id);
                                        }}
                                    >
                                        {littleImg.img}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-9">
                    <div className="big-img-wrapper">
                        {
                            Images.map(bigImg => (
                                <div key={bigImg.id} className={slideIndex === bigImg.id ? "img-wrapper" : "d-none"}>
                                    {bigImg.img}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImgSlider;