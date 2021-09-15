import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products: React.FC = () => {
    return (
        <div className="products">
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
            <div className="row">
                <div className="col-12">
                    <div className="load-more-btn">
                        <button type="button">Load More</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;