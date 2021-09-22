import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortByPrice } from '../../redux/actions/productActions';
import { RootState } from '../../redux/reducers/index';

const SortingBar: React.FC = () => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(SortByPrice(e.target.value));
    };

    return (
        <div className="sorting-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="products-found d-flex align-items-center">
                            <span>{products.length}</span>
                            <p>Products found</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sorting">
                            <select onChange={handleChange}>
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