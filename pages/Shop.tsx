import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SortingBar from '../components/Shop/SortingBar';
import Sidebar from '../components/Shop/Sidebar';
import Products from '../components/Shop/Products';

const Shop: React.FC = () => {
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <title>Lezada - Shop</title>
            </Head>

            <section id="breadcrumb">
                <div className="container h-100">
                    <div className="content h-100">
                        <h1>Shop</h1>
                        <ul className="breadcrumb-links d-flex">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <span>Shop</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <SortingBar />

            <div className="sidebar-and-products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar />
                        </div>
                        <div className="col-lg-9">
                            <Products />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Shop;