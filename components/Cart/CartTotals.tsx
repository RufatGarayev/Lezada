import React from 'react';
import Link from 'next/link';
import { ICartProps } from '../../redux/reducers/cartReducer';
import { IProducts } from '../../types/types';

const CartTotals: React.FC<ICartProps> = (props) => {
    const { cart } = props;

    const totalPrice = cart.reduce((total: number, product: IProducts) =>
        (total += product.price), 0);

    return (
        <div className="cart-totals">
            <div className="cart-totals-content">
                <div className="cart-totals-title">
                    <h2>Cart Totals</h2>
                </div>
                <div className="subtotal price d-flex justify-content-between align-items-center">
                    <h6>Subtotal</h6>
                    <p>
                        <span>$</span>{totalPrice.toFixed(2)}
                    </p>
                </div>
                <div className="grand-total price d-flex justify-content-between">
                    <h5>Total</h5>
                    <p>
                        <span>$</span>{totalPrice.toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="checkout-btn">
                <Link href="/Checkout">
                    <a className="btn-style btn-style-2 text-center w-100">
                        Proceed to Checkout
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default CartTotals;