import React, { useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { ICartProps } from '../../redux/reducers/cartReducer';
import { IProducts } from '../../types/types';
import { DeleteFromCart, ClearCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CartTable: React.FC<ICartProps> = (props) => {
    const { cart } = props;
    const dispatch = useDispatch();

    return (
        <>
            {/* ===== cart-table ===== */}
            <div className="cart-table">
                <table className="w-100">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((product: IProducts) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="product-img">
                                            <Link href={`/products/${product.id}`}>
                                                <a>
                                                    <Image src={product.image} alt={product.title} layout="fill" />
                                                </a>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="product-title-wrapper">
                                            <div className="product-title">
                                                <h6>
                                                    <Link href={`/products/${product.id}`}>
                                                        <a>{product.title}</a>
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="product-price price m-0">
                                            <span>$</span>{product.price.toFixed(2)}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="product-quantity mt-2">1</p>
                                    </td>
                                    <td>
                                        <div className="remove-btn">
                                            <button
                                                type="button"
                                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                    dispatch(DeleteFromCart(product.id));
                                                    toast.error('"' + product.title + '" removed from the Cart');
                                                }}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
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
                <button
                    type="button"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        dispatch(ClearCart());
                    }}
                >
                    Clear Cart
                </button>
            </div>
        </>
    )
};

export default CartTable;