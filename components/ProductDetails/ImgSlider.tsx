import React from 'react';
// import LaptopImg1 from '../../public/images/products/wooden-chair.jpg';
// import LaptopImg2 from '../../public/images/products/wooden-table.jpg';
// import LaptopImg3 from '../../public/images/products/glass.jpg';
// import Image from 'next/image';
import ImageGallery from 'react-image-gallery';

interface IReactImgGalleryOptions {
    showPlayButton: boolean;
    showFullscreenButton: boolean;
    showNav: boolean;
};

interface IReactImgGalleryimages {
    original: any;
    thumbnail: any;
}

const ImgSlider: React.FC = () => {
    const options: IReactImgGalleryOptions = {
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false
    };

    const images: IReactImgGalleryimages[] = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/1000/600/'
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/1000/600/'
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/1000/600/'
        },
    ];

    return (
        <div className="img-slider">
            <ImageGallery
                items={images}
                {...options}
            />
        </div>
    )
};

export default ImgSlider;