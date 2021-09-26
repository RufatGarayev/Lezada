import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { SocialMediaData } from '../../components/Common/SocialMediaData';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        {/* ===== brand and copyright ===== */}
                        <div className="brand-and-copyright">
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
                            <div className="copyright">
                                <p>© 2021 Lezada</p>
                                <p>
                                    Created by
                                    <a href="https://rufatgarayev.netlify.app/" target="__blank">Rufat Garayev</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* ===== about links ===== */}
                        <div className="about-links links">
                            <h6>About</h6>
                            <ul>
                                <li>
                                    <Link href="/about">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Store Location</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Orders Tracking</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* ===== useful links ===== */}
                        <div className="useful-links links">
                            <h6>Useful Links</h6>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Returns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Support Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Size Guide</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        {/* ===== follow us ===== */}
                        <div className="follow-us">
                            <h6>Follow Us On</h6>
                            <ul>
                                {
                                    SocialMediaData.map(item => (
                                        <li key={item.id} className={item.class}>
                                            <a className="d-flex" href="#/">
                                                <span>{item.icon}</span>
                                                <p>{item.title}</p>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* ===== subscribe ===== */}
                        <div className="subscribe">
                            <h2>Subscribe</h2>
                            <p>Subscribe to our newsletter to receive news on update.</p>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Your email address"
                                />
                                <button type="submit">
                                    <HiOutlineArrowRight />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;