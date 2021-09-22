import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { SortByCategory } from '../../redux/actions/productActions';

interface ICategoriesData {
    id: number;
    title: string;
};

const Sidebar: React.FC = () => {
    const CategoriesData: ICategoriesData[] = [
        { id: 0, title: "All Categories" },
        { id: 1, title: "Decor" },
        { id: 2, title: "Fashion" },
        { id: 3, title: "Cosmetics" },
        { id: 4, title: "Furniture" },
        { id: 5, title: "Jewelry" },
        { id: 6, title: "Watches" },
    ];

    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const loading = productsState.isLoading;
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <div className="categories">
                <h4>Categories</h4>
                <ul>
                    {
                        CategoriesData.map(item => (
                            <li
                                key={item.id}
                                onClick={(e: React.MouseEvent<HTMLLIElement>) => {
                                    dispatch(SortByCategory(item.title));
                                }}
                            >
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="popular-products">
                <h4>Popular products</h4>
                <ul>
                    {
                        products.map(product => (
                            product.group === "Popular" && (
                                <li key={product.id}>
                                    <div className="item d-flex">
                                        <div className="img">
                                            <Image src={product.img} alt={product.title} layout='fill' />
                                        </div>
                                        <div className="info">
                                            <div className="title">
                                                <Link href="#/">
                                                    <a>{product.title}</a>
                                                </Link>
                                            </div>
                                            <div className="price">
                                                <p>
                                                    {
                                                        product.hasDiscount && (
                                                            <del>{product.previousPrice}</del>
                                                        )
                                                    }
                                                    <span>${product.price.toFixed(2)}</span>
                                                </p>
                                            </div>
                                            <span className="rating">{product.rating}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        ))
                    }
                </ul>
            </div>
            <div className="tags-wrapper">
                <h4>Tags</h4>
                <div className="tags">
                    {
                        CategoriesData.map(item => (
                            item.id !== 0 && (
                                <button type="button" key={item.id}>
                                    {item.title.toLowerCase()}
                                </button>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Sidebar;