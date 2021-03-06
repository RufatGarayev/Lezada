import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { DeleteFromCart } from '../../redux/actions/cartActions';
import { IProducts } from '../../types/types';
import { ShowSidebarCart } from '../../redux/actions/primaryActions';
import { toast } from 'react-toastify';

const SideBarCart: React.FC = () => {
    const primaryState = useSelector((state: RootState) => state.primary);
    const cartState = useSelector((state: RootState) => state.cart);
    const showCart = primaryState.showSidebarCart;
    const cart = cartState.cart;
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price), 0);

    return (
        <div className={showCart ? "show-sidebarCart sidebar-cart" : "sidebar-cart"}>
            <div className="sidebar-cart-wrapper h-100">
                <div className="sidebar-cart-area d-flex flex-column justify-content-between">
                    {
                        cart.length > 0 ? (
                            <>
                                <div className="cart-header d-flex justify-content-between">
                                    <div className="item-count d-flex">
                                        <i className="flaticon-shopping-bag mr-2"></i>
                                        <p><span className="product-count">{cart.length}</span> item</p>
                                    </div>
                                    <div className="close-btn">
                                        <button
                                            type="button"
                                            className="text-danger"
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                dispatch(ShowSidebarCart(false));
                                            }}
                                        >
                                            ???
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-body">
                                    {
                                        cart.map((item: IProducts) => (
                                            <div
                                                key={item.id}
                                                className="product-item d-flex align-items-start justify-content-between"
                                            >
                                                <div className="product-img">
                                                    <Link href={`/products/${item.id}`}>
                                                        <a
                                                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                                dispatch(ShowSidebarCart(false));
                                                            }}
                                                        >
                                                            <Image src={item.image} alt={item.title} layout="fill" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="product-info w-100">
                                                    <Link href={`/products/${item.id}`}>
                                                        <a
                                                            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                                dispatch(ShowSidebarCart(false));
                                                            }}
                                                        >
                                                            {item.title}
                                                        </a>
                                                    </Link>
                                                    <p className="product-count-and-price">
                                                        <span className="product-price">${(item.price).toFixed(2)}</span>
                                                        <span className="multiplication">??</span>
                                                        <span className="product-count text-muted">1</span>
                                                    </p>
                                                    <p className="product-total-price"></p>
                                                </div>
                                                <div className="remove-btn">
                                                    <button
                                                        className="remove-product"
                                                        type="button"
                                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                            dispatch(DeleteFromCart(item.id));
                                                            toast.error('"' + item.title + '" removed from the Cart');
                                                        }}
                                                    >
                                                        ???
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="cart-footer">
                                    <div className="subtotal d-flex justify-content-between">
                                        <h6>Subtotal:</h6>
                                        <span className="product-count">${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="cart-links">
                                        <Link href="/Cart">
                                            <a
                                                className="view-cart-btn"
                                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                    dispatch(ShowSidebarCart(false));
                                                }}
                                            >
                                                View Cart
                                            </a>
                                        </Link>
                                        <Link href="/Checkout">
                                            <a
                                                className="checkout-btn"
                                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                    dispatch(ShowSidebarCart(false));
                                                }}
                                            >
                                                Checkout
                                            </a>
                                        </Link>
                                    </div>
                                    <p className="text-muted">Free Shipping on All Orders Over $100!</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="cart-header d-flex justify-content-between">
                                    <div className="item-count d-flex">
                                        <i className="flaticon-shopping-bag mr-2"></i>
                                        <p><span className="product-count">{cart.length}</span> item</p>
                                    </div>
                                    <div className="close-btn">
                                        <button
                                            type="button"
                                            className="text-danger"
                                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                                dispatch(ShowSidebarCart(false));
                                            }}
                                        >
                                            ???
                                        </button>
                                    </div>
                                </div>
                                <div className="cart-body">
                                    <p className="no-products">No items found in cart</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default SideBarCart;