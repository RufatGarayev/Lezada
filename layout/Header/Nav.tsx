import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { HiUser } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SideBarCart from './SideBarCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Nav: React.FC = () => {
    const [showSidebarCart, setShowSidebarCart] = useState<boolean>(false);
    const [shadow, setShadow] = useState<boolean>(false);
    const cartState = useSelector((state: RootState) => state.cart);
    const cart = cartState.cart;

    useEffect(() => {
        window.addEventListener("scroll", function (this: Window, e: Event): void {
            if (window.pageYOffset > 260) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        });
    }, []);

    return (
        <header>
            <div className={shadow ? "show-shadow nav-wrapper" : "nav-wrapper"}>
                <div className="container">
                    <nav className="d-flex">
                        <div className="brand">
                            <Link href="/">
                                <a>
                                    <Image
                                        src="/../public/images/logo/logo.png"
                                        alt="logo"
                                        width={140}
                                        height={21}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/About">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Shop">
                                        <a>Shop</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/Contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="actions">
                            <ul>
                                <li>
                                    <button>
                                        <IoIosSearch />
                                    </button>
                                </li>
                                <li>
                                    <Link href="/Login">
                                        <a><HiUser /></a>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="cart-btn"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            setShowSidebarCart(true);
                                        }}
                                    >
                                        <AiOutlineShoppingCart />
                                    </button>
                                    <sup>{cart.length}</sup>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* ===== sidebar-cart ===== */}
            <SideBarCart
                showSidebarCart={showSidebarCart}
                setShowSidebarCart={setShowSidebarCart}
            />
            {/* ===== dark bg-color ===== */}
            <div
                className={showSidebarCart ? "dark-bg-color" : "d-none"}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    setShowSidebarCart(false);
                }}
            ></div>
        </header>
    )
};

export default Nav;