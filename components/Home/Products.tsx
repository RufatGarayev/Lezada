import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { GetProducts } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/index';

interface ITabs {
    id: number;
    title: string;
};

const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("Women's Clothing");
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    const Tabs: ITabs[] = [
        { id: 1, title: "Jewelery" },
        { id: 2, title: "Women's Clothing" },
        { id: 3, title: "Men's Clothing" }
    ];

    return (
        <section id="home-products">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="tabs">
                            {
                                Tabs.map(item => (
                                    <li
                                        key={item.id}
                                        className={activeCategory === item.title ? "active-li" : ""}
                                        onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                                            setActiveCategory(item.title)
                                        }
                                    >
                                        {item.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(product => (
                            product.category === activeCategory.toLowerCase() && (
                                <div key={product.id} className="col-lg-3 col-md-6 col-sm-6">
                                    <ProductCard product={product} />
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Products;