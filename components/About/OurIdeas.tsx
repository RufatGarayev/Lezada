import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const OurIdeas: React.FC = () => {
    return (
        <section id="our-ideas">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        {/* ===== top ===== */}
                        <div className="top text-center">
                            <h6>SIMPLY OR WHITE</h6>
                            <h1>Clever & unique ideas</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur cing elit.
                                Suspe ndisse suscipit sagittis leo sit met condimentum estibulum is
                                Suspe ndisse suscipit sagittis leo sit met condimentum estibulorem ipsum dolor sit amet,
                                consectetur cing elit.
                            </p>
                        </div>
                        {/* ===== middle ===== */}
                        <div className="middle">
                            <div className="bg-img-area">
                                <div className="content">
                                    <div className="play-img">
                                        <Image src="/../public/images/other/icon-play.png" alt="logo" layout='fill' />
                                    </div>
                                    <div className="video d-none">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/feOScd2HdiU"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <h3>OUR STORY</h3>
                                </div>
                            </div>
                            <Link href="/Shop">
                                <a className="left-link">LEZADA STORE</a>
                            </Link>
                            <Link href="/About">
                                <a className="right-link">OUR STORY</a>
                            </Link>
                        </div>
                        {/* ===== bottom ===== */}
                        <div className="bottom">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact">
                                        <div className="contact-item">
                                            <h6>ADDRESS</h6>
                                            <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                                        </div>
                                        <div className="contact-item">
                                            <h6>PHONE</h6>
                                            <p>Mobile: (+88) – 1990</p>
                                        </div>
                                        <div className="contact-item">
                                            <h6>EMAIL</h6>
                                            <p>contact@lezadastore.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur cing elit.
                                            Suspe ndisse suscipit sagittis leo sit estibulum issim Lorem ipsum dolor sit amet,
                                            consectetur cing elit. ipsum dolor sit amet, consectetur cing elit.
                                            Suspe ndisse suscipit sagittis leo sit es
                                        </p>
                                        <Link href="/Shop">
                                            <a><span>+</span> ONLINE STORE</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurIdeas;