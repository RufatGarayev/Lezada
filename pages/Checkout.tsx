import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { IProducts } from '../data/products';

const Checkout: React.FC = () => {
    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price * product.count), 0);

    return (
        <div>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <title>Lezada - Checkout</title>
            </Head>

            <section id="breadcrumb">
                <div className="container h-100">
                    <div className="content h-100">
                        <h1>Checkout</h1>
                        <ul className="breadcrumb-links d-flex">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <span>Checkout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="checkout-content">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-7">
                                {/* ===== billing address ===== */}
                                <div className="billing-address">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="title">
                                                <h5>Billing Address</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="First Name *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Last Name *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Email *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Phone *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Company *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Address *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Country *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Town/City *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="State *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="inputs-wrapper w-100">
                                                <input
                                                    type="text"
                                                    className="error-border"
                                                    placeholder="Zip Code *"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                {/* ===== cart totals and orders ===== */}
                                <div className="cart-totals-area">
                                    <div className="title">
                                        <h5>Cart Totals</h5>
                                    </div>
                                    <div className="cart-totals-and-orders">
                                        <div className="top d-flex justify-content-between">
                                            <h6>Product</h6>
                                            <h6>Total</h6>
                                        </div>
                                        <div className="body">
                                            <ul>
                                                {
                                                    cart.map((product: IProducts) => (
                                                        <li key={product.id} className="d-flex justify-content-between">
                                                            <div className="left">
                                                                <Link href={`/product-details/${product.id}`}>
                                                                    <a>
                                                                        <p className="title">{product.title}</p>
                                                                        <p className="count text-muted">
                                                                            Quantity:
                                                                            <span>{product.count}</span>
                                                                        </p>
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="right d-flex">
                                                                <span>$</span>
                                                                <p>{product.price.toFixed(2)}</p>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            <div className="subtotal d-flex justify-content-between">
                                                <h6>Sub Total</h6>
                                                <div className="price d-flex">
                                                    <span>$</span>
                                                    <p>{totalPrice.toFixed(2)}</p>
                                                </div>
                                            </div>
                                            <div className="total d-flex justify-content-between align-items-center">
                                                <h6>Grand Total</h6>
                                                <div className="price d-flex">
                                                    <span>$</span>
                                                    <p>{totalPrice.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="order-btn">
                                        <button type="submit">Place Order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Checkout;