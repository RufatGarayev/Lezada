import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ImgSlider from '../components/ProductDetails/ImgSlider';
import ProductInfo from '../components/ProductDetails/ProductInfo';
import Reviews from '../components/ProductDetails/Reviews';

const PDetails: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <title>Lezada - Product Details</title>
            </Head>

            <section id="breadcrumb">
                <div className="container h-100">
                    <div className="content h-100">
                        <h1>Product Details</h1>
                        <ul className="breadcrumb-links d-flex">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/Shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <span>Product Details</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <ImgSlider />
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ProductInfo />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Reviews />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default PDetails;