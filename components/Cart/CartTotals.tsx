import React from 'react';
import Link from 'next/link';

const CartTotals: React.FC = () => {
    return (
        <div className="cart-totals">
            <div className="cart-totals-content">
                <div className="cart-totals-title">
                    <h2>Cart Totals</h2>
                </div>
                <div className="subtotal price d-flex justify-content-between align-items-center">
                    <h6>Subtotal</h6>
                    <p>
                        <span>$</span>50.00
                    </p>
                </div>
                <div className="grand-total price d-flex justify-content-between">
                    <h5>Total</h5>
                    <p>
                        <span>$</span>50.00
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