import React, { useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { ICartProps } from '../../redux/reducers/cartReducer';
import { IProducts } from '../../data/products';
import {
    DeleteFromCart, DecreaseProductCount,
    IncreaseProductCount, ClearCart
} from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CartTable: React.FC<ICartProps> = (props) => {
    const [size] = useState<number>(1);
    const { cart } = props;
    const dispatch = useDispatch();

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
                        {
                            cart.map((product: IProducts) => (
                                <tr key={product.id}>
                                    <td>
                                        <div className="product-img-title d-flex align-items-center">
                                            <div className="product-img">
                                                <Link href="/">
                                                    <a>
                                                        <Image src={product.img} alt={product.title} layout="fill" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="product-title">
                                                <h6>
                                                    <Link href="/">
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
                                        <div className="quantity-wrapper">
                                            <div className="quantity-area d-flex align-items-center">
                                                <button
                                                    className="minus-btn"
                                                    onClick={(e) => {
                                                        dispatch(DecreaseProductCount(product.id));
                                                    }}
                                                >
                                                    −
                                                </button>
                                                <input type="text" size={size} readOnly value={product.count} />
                                                <button
                                                    className="plus-btn"
                                                    onClick={(e) => {
                                                        dispatch(IncreaseProductCount(product.id));
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="total-price price m-0">
                                            <span>$</span>{(product.price * product.count).toFixed(2)}
                                        </p>
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