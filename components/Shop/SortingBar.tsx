import React from 'react';

const SortingBar: React.FC = () => {
    return (
        <div className="sorting-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="products-found d-flex align-items-center">
                            <span>20</span>
                            <p>Products found</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sorting">
                            <select>
                                <option value="default">Default</option>
                                <option value="lowPrice">Price - Low to High</option>
                                <option value="highPrice">Price - High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SortingBar;