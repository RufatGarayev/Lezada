import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Discount: React.FC = () => {
    return (
        <section id="discount">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="item">
                            <div className="img">
                                <Image src="/../public/images/other/cabinet.jpg" alt="product" layout='fill' />
                            </div>
                            <div className="tags">
                                <ul>
                                    <li>
                                        <Link href="/Shop">
                                            <a>#summer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">
                                            <a>#shelf</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">
                                            <a>#sale</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text text-center">
                                <h2>
                                    Up To 40% Off Final Sale Items. <br />
                                    Caught in the moment!
                                </h2>
                            </div>
                            <div className="btnn text-center">
                                <Link href="/Shop">
                                    <a>SHOP NOW</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Discount;