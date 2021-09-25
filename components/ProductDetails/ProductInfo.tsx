import React from 'react';
import Link from 'next/link';
import { SocialMediaData } from '../Common/SocialMediaData';
import { IProductProps } from '../../data/products';

const ProductInfo: React.FC<IProductProps> = ({ product }) => {

    return (
        <div className="product-info">
            <div className="rating-area">
                <div className="d-flex align-items-center">
                    <span className="rating">{product.rating}</span>
                    <p className="review-count text-muted">(25 customer reviews)</p>
                </div>
            </div>
            <div className="title">
                <h2>{product.title}</h2>
            </div>
            <div className="price d-flex align-items-end">
                <p className="old-price d-flex">
                    <span>$</span>
                    <del>{product.previousPrice?.toFixed(2)}</del>
                </p>
                <p className="new-price d-flex">
                    <span>$</span>
                    <span>{product.price.toFixed(2)}</span>
                </p>
            </div>
            <div className="description">
                <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                    qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
            </div>
            <div className="add-to-cart-btn">
                <button type="button">ADD TO CART</button>
            </div>
            <div className="table">
                <table className="w-100">
                    <tbody>
                        <tr>
                            <td>SKU:</td>
                            <td><p>asdf126</p></td>
                        </tr>
                        <tr>
                            <td>Categories:</td>
                            <td>
                                <Link href="/Shop">
                                    <a>cosmetics</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Tags:</td>
                            <td>
                                <Link href="/Shop">
                                    <a>cosmetics</a>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Share on:</td>
                            <td>
                                <ul>
                                    {
                                        SocialMediaData.map(item => (
                                            <li key={item.id}>
                                                <a className={item.class} href="#/">
                                                    {item.icon}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default ProductInfo;