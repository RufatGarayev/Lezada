import React, { useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const CartTable: React.FC = () => {
    const [size] = useState<number>(1);

    return (
        <>
            {/* ===== cart-table ===== */}
            <div className="cart-table">
                <table className="w-100">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="product-img-title d-flex align-items-center">
                                    <div className="product-img">
                                        <Link href="/">
                                            <a>
                                                <Image src="/../public/images/products/wooden-chair.jpg" alt="product" layout='fill' />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="product-title">
                                        <h6>
                                            <Link href="/">
                                                <a>Product title</a>
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="product-price price m-0"><span>$</span>50.00</p>
                            </td>
                            <td>
                                <div className="quantity-wrapper">
                                    <div className="quantity-area d-flex align-items-center">
                                        <button
                                            className="minus-btn"
                                        >
                                            −
                                        </button>
                                        <input type="text" size={size} readOnly value={1} />
                                        <button
                                            className="plus-btn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="total-price price m-0">
                                    <span>$</span>50.00
                                </p>
                            </td>
                            <td>
                                <div className="remove-btn">
                                    <button
                                        type="button"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* ===== bottom-content ===== */}
            <div className="bottom-content">
                <Link href="/Shop">
                    <a className="d-flex align-items-center">
                        <span><HiArrowNarrowLeft /></span>
                        <p className="m-0">Back to Shop</p>
                    </a>
                </Link>
                <button type="button">
                    Clear Cart
                </button>
            </div>
        </>
    )
};

export default CartTable;