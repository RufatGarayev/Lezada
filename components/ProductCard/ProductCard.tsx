import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProducts } from '../../data/products';
import { AddToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

interface IProps {
    product: IProducts;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
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
                    <Link href={`/products/${product.id}`}>
                        <a>
                            <Image src={product.img} alt={product.title} layout='fill' />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="card-bottom">
                <div className="title">
                    <Link href={`/products/${product.id}`}>
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
                    <button
                        type="button"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            dispatch(AddToCart(product));
                            toast.success('"' + product.title + '" added to the Cart');
                        }}
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;