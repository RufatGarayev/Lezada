import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProductProps } from '../../data/products';

const ProductCard: React.FC<IProductProps> = ({ product }) => {

    return (
        <div className="product-card">
            {/* ===== card-top ===== */}
            <div className="card-top">
                <div className="label-wrapper">
                    {
                        product.label !== "" ?
                            <div className={product.label === "new" ? "new label" : "sale label"}>
                                <span>{product.label}</span>
                            </div> : ""
                    }
                </div>
                <div className="img">
                    <Link href="/product-detals">
                        <a><Image src={product.img} alt={product.title} layout='fill' /></a>
                    </Link>
                </div>
            </div>
            {/* ===== card-bottom ===== */}
            <div className="card-bottom">
                <div className="title">
                    <Link href="/product-detals">
                        <a>
                            <h6>{product.title}</h6>
                        </a>
                    </Link>
                </div>
                <div className="product-price">
                    <p>
                        {
                            product.hasDiscount && (
                                <del>${product.previousPrice?.toFixed(2)}</del>
                            )
                        }
                        <span>${product.price.toFixed(2)}</span>
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