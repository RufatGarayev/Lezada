import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard: React.FC = () => {
    return (
        <div className="product-card">
            {/* ===== card-top ===== */}
            <div className="card-top">
                <div className="label-wrapper">
                    <div className="sale label">
                        <span>-20%</span>
                    </div>
                    <div className="new label">
                        <span>new</span>
                    </div>
                </div>
                <div className="img">
                    <Link href="/product-detals">
                        <a>
                            <Image src="/../public/images/products/wooden-chair.jpg" alt="logo" layout='fill' />
                        </a>
                    </Link>
                </div>
            </div>
            {/* ===== card-bottom ===== */}
            <div className="card-bottom">
                <div className="title">
                    <Link href="/product-detals">
                        <a>
                            <h6>Wooden chair</h6>
                        </a>
                    </Link>
                </div>
                <div className="product-price">
                    <p>
                        <del>$30.00</del>
                        <span>$24.00</span>
                    </p>
                </div>
                <div className="add-to-cart-btn">
                    <button type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;