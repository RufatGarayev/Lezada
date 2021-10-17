import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IProducts } from '../../types/types';
import { AddToCart } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

interface IProps {
    product: IProducts;
};

const ProductCard: React.FC<IProps> = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <div className="card-top">
                <div className="img">
                    <Link href={`/products/${product.id}`}>
                        <a>
                            <Image src={product.image} alt={product.title} layout='fill' />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="card-bottom">
                <div className="title">
                    <Link href={`/products/${product.id}`}>
                        <a>
                            <h6>{product.title.slice(0, 18)}...</h6>
                        </a>
                    </Link>
                </div>
                <div className="product-price">
                    <p>
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
        </div >
    )
};

export default ProductCard;