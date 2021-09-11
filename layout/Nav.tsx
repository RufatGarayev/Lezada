import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import { HiUser } from 'react-icons/hi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Nav: React.FC = () => {
    return (
        <header>
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
                                <Link href="/about">
                                    <a>About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Shop</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
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
                                <Link href="/login">
                                    <a><HiUser /></a>
                                </Link>
                            </li>
                            <li>
                                <button className="cart-btn">
                                    <AiOutlineShoppingCart />
                                </button>
                                <sup>0</sup>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Nav;