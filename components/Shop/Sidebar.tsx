import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';
import { SortByCategory, SearchProduct } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import { ShowSidebarFilter } from '../../redux/actions/primaryActions';

interface ICategoriesData {
    id: number;
    title: string;
};

interface IPopularProducts {
    id: number;
    title: string;
    img: JSX.Element;
    previousPrice?: number;
    price: number;
    rating: string;
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

    const PopularProducts: IPopularProducts[] = [
        {
            id: 2,
            title: "Wooden Table",
            img: <Image src="/../public/images/products/wooden-table.jpg" alt="logo" layout='fill' />,
            previousPrice: 17.00,
            price: 15.30,
            rating: "★★★★★"
        },
        {
            id: 1,
            title: "Glass",
            img: <Image src="/../public/images/products/glass.jpg" alt="logo" layout='fill' />,
            price: 15.00,
            rating: "★★★★★"
        },
        {
            id: 4,
            title: "Wooden Chair",
            img: <Image src="/../public/images/products/wooden-chair.jpg" alt="logo" layout='fill' />,
            price: 17.60,
            rating: "★★★★★"
        }
    ];

    const [searchValue, setSearchValue] = useState<string>("");
    const primaryState = useSelector((state: RootState) => state.primary);
    const showFilter = primaryState.showSidebarFilter;
    const dispatch = useDispatch();

    return (
        <div className={showFilter ? "sidebar show-sidebar-filter" : "sidebar"}>
            <div className="close-btn">
                <button
                    type="button"
                    className="text-danger"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        dispatch(ShowSidebarFilter(false));
                    }}
                >
                    ✕
                </button>
            </div>
            <div className="popular-products">
                <h4>Popular products</h4>
                <ul>
                    {
                        PopularProducts.map((product) => (
                            <li key={product.id}>
                                <div className="item d-flex">
                                    <div className="img">
                                        {product.img}
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
                                                    product.previousPrice && (
                                                        <del>${product.previousPrice.toFixed(2)}</del>
                                                    )
                                                }
                                                <span>${product.price.toFixed(2)}</span>
                                            </p>
                                        </div>
                                        <span className="rating">{product.rating}</span>
                                    </div>
                                </div>
                            </li>
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