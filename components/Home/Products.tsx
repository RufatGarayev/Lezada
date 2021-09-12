import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

interface ITabs {
    id: number;
    title: string;
};

const Products: React.FC = () => {
    const Tabs: ITabs[] = [
        { id: 1, title: "New" },
        { id: 2, title: "Popular" },
        { id: 3, title: "Sale" }
    ];

    return (
        <section id="home-products">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="tabs">
                            {
                                Tabs.map(item => (
                                    <li key={item.id}>{item.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Products;