import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { GetProducts } from '../../redux/actions/productActions';
import { RootState } from '../../redux/reducers/index';

const Products: React.FC = () => {
    const [visible, setVisible] = useState<number>(8);
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const loading = productsState.isLoading;
    const message = productsState.message;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    const showMoreProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <div className="products">
            {
                loading ? (
                    <p>Loading...</p>

                ) : products.length === 0 ? (
                    <p className="alert">No products found</p>
                    
                ) : (
                    <>
                        <div className="row">
                            {
                                products.slice(0, visible).map((product: any) => (
                                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="load-more-btn">
                                    <button
                                        type="button"
                                        onClick={showMoreProducts}
                                    >
                                        Load More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div >
    )
};

export default Products;