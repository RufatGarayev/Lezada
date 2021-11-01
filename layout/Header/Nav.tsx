import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SideBarCart from './SideBarCart';
import { HiUser } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { VscMenu } from 'react-icons/vsc';
import { useSelector, useDispatch } from 'react-redux';
import { ShowSidebarMenu, ShowSidebarCart } from '../../redux/actions/primaryActions';
import { RootState } from '../../redux/reducers';

interface ILinks {
    id: number;
    title: string;
    href: string;
};

const Nav: React.FC = () => {
    const Links: ILinks[] = [
        { id: 1, title: "Home", href: "/" },
        { id: 2, title: "About", href: "/About" },
        { id: 3, title: "Shop", href: "/Shop" },
        { id: 4, title: "Contact", href: "/Contact" }
    ];

    const primaryState = useSelector((state: RootState) => state.primary);
    const cartState = useSelector((state: RootState) => state.cart);
    const showMenu = primaryState.showSidebarMenu;
    const showCart = primaryState.showSidebarCart;
    const [shadow, setShadow] = useState<boolean>(false);
    const cart = cartState.cart;
    const dispatch = useDispatch();

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
                                        src="/images/logo/logo.png"
                                        alt="logo"
                                        width={140}
                                        height={21}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="links">
                            <ul>
                                {
                                    Links.map(link => (
                                        <li key={link.id}>
                                            <Link href={link.href}>
                                                <a>{link.title}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="actions">
                            <ul>
                                <li>
                                    <Link href="/Login">
                                        <a><HiUser /></a>
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="cart-btn"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            dispatch(ShowSidebarCart(true));
                                        }}
                                    >
                                        <AiOutlineShoppingCart />
                                    </button>
                                    <sup>{cart.length}</sup>
                                </li>
                                <li className="hamburger-btn-li">
                                    <button
                                        type="button"
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            dispatch(ShowSidebarMenu(true));
                                        }}
                                    >
                                        <VscMenu />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* ===== sidebar-menu ===== */}
            <div className={showMenu ? "show-sidebarMenu links" : "links links2"}>
                <div className="top d-flex align-items-center justify-content-between">
                    <h6>MENU</h6>
                    <button
                        type="button"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            dispatch(ShowSidebarMenu(false));
                        }}
                    >
                        ✕
                    </button>
                </div>
                <ul>
                    {
                        Links.map(link => (
                            <li key={link.id}>
                                <Link href={link.href}>
                                    <a
                                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                            dispatch(ShowSidebarMenu(false));
                                        }}
                                    >
                                        {link.title}
                                    </a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* ===== sidebar-cart ===== */}
            <SideBarCart />
            {/* ===== dark bg-color ===== */}
            <div
                className={showMenu || showCart ? "dark-bg-color" : "d-none"}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    dispatch(ShowSidebarMenu(false));
                    dispatch(ShowSidebarCart(false));
                }}
            ></div>
        </header>
    )
};

export default Nav;