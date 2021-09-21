import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { GetProducts } from '../../redux/actions/productActions';
import { RootState } from '../../redux/reducers/index';

interface ITabs {
    id: number;
    title: string;
};

const Products: React.FC = () => {
    const [activeGroup, setActiveGroup] = useState<string>("Popular");
    const productsState = useSelector((state: RootState) => state.products);
    const products = productsState.products;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

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
                                    <li
                                        key={item.id}
                                        className={activeGroup === item.title ? "active-li" : ""}
                                        onClick={(e: React.MouseEvent<HTMLLIElement>) =>
                                            setActiveGroup(item.title)
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
                            product.group === activeGroup && (
                                <div key={product.id} className="col-lg-4">
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