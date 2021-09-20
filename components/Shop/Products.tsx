import React, { useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { GetProducts } from '../../redux/actions/productActions';
import { RootState } from '../../redux/reducers/index';

const Products: React.FC = () => {
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    console.log(products)

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