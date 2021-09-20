import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

    return (
        <div className="sidebar">
            <div className="categories">
                <h4>Categories</h4>
                <ul>
                    {
                        CategoriesData.map(item => (
                            <li key={item.id}>
                                {item.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="popular-products">
                <ul>
                    <li>
                        <div className="item d-flex">
                            <div className="img">
                                <Image src="/../public/images/products/wooden-table.jpg" alt="product" layout='fill' />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <Link href="#/">
                                        <a>Wooden Table</a>
                                    </Link>
                                </div>
                                <div className="price">
                                    <p>
                                        <del>$30.00</del>
                                        <span>$24.00</span>
                                    </p>
                                </div>
                                <span className="rating">★★★★★</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item d-flex">
                            <div className="img">
                                <Image src="/../public/images/products/wooden-table.jpg" alt="product" layout='fill' />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <Link href="#/">
                                        <a>Wooden Table</a>
                                    </Link>
                                </div>
                                <div className="price">
                                    <p>
                                        <del>$30.00</del>
                                        <span>$24.00</span>
                                    </p>
                                </div>
                                <span className="rating">★★★★★</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item d-flex">
                            <div className="img">
                                <Image src="/../public/images/products/wooden-table.jpg" alt="product" layout='fill' />
                            </div>
                            <div className="info">
                                <div className="title">
                                    <Link href="#/">
                                        <a>Wooden Table</a>
                                    </Link>
                                </div>
                                <div className="price">
                                    <p>
                                        <del>$30.00</del>
                                        <span>$24.00</span>
                                    </p>
                                </div>
                                <span className="rating">★★★★★</span>
                            </div>
                        </div>
                    </li>
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