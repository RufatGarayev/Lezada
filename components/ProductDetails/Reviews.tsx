import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

interface IUsersData {
    id: number;
    img: JSX.Element;
    title: string;
    userRating: string;
    date: string;
    message: string;
};

const Reviews: React.FC = () => {
    const UsersData: IUsersData[] = [
        {
            id: 1,
            img: <Image src='/../public/images/users/user1.jpeg' alt="user" width={82} height={82} />,
            title: "Scott James",
            userRating: "★★★★★",
            date: "April 5, 2020",
            message: "Thanks for always keeping your HTML themes up to date. Your level of support and dedication is second to none."
        },
        {
            id: 2,
            img: <Image src='/../public/images/users/user2.jpeg' alt="user" width={70} height={70} />,
            title: "Owen Christ",
            userRating: "★★★★★",
            date: "April 7, 2020",
            message: "I didn’t expect this poster to arrive folded. Now there are lines on the poster and one sad Ninja."
        },
        {
            id: 3,
            img: <Image src='/../public/images/users/user3.jpeg' alt="user" width={70} height={70} />,
            title: "Edna Watson",
            userRating: "★★★★★",
            date: "April 9, 2020",
            message: "Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!"
        }
    ];

    const [rows] = useState<number>(7);

    return (
        <div className="reviews">
            <div className="users-comments">
                <div className="title">
                    <h3>Reviews</h3>
                    <p>Your email address will not be published.</p>
                </div>
                <ul>
                    {
                        UsersData.map(item => (
                            <li key={item.id}>
                                <div className="user-item d-flex">
                                    <div className="img">{item.img}</div>
                                    <div className="info">
                                        <span className="rating">{item.userRating}</span>
                                        <div className="title-and-date d-flex">
                                            <h6>{item.title}</h6>
                                            <p>{item.date}</p>
                                        </div>
                                        <div className="message">
                                            <p>{item.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="review-form">
                <h3>Add a review</h3>
                <div className="rating d-flex">
                    <p>YOUR RATING:</p>
                    <div className="stars">
                        <input type="radio" name="rate" id="rate-5" />
                        <label htmlFor="rate-5" className="fifth-star"><AiFillStar /></label>
                        <input type="radio" name="rate" id="rate-4" />
                        <label htmlFor="rate-4" className="fourth-star"><AiFillStar /></label>
                        <input type="radio" name="rate" id="rate-3" />
                        <label htmlFor="rate-3" className="third-star"><AiFillStar /></label>
                        <input type="radio" name="rate" id="rate-2" />
                        <label htmlFor="rate-2" className="second-star"><AiFillStar /></label>
                        <input type="radio" name="rate" id="rate-1" />
                        <label htmlFor="rate-1" className="first-star"><AiFillStar /></label>
                    </div>
                </div>
                <div className="message-area">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-wrapper input-wrapper-name">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-100"
                                        placeholder="Name *"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        name="email"
                                        className="w-100"
                                        placeholder="Email *"
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="textarea-wrapper">
                                    <textarea
                                        name="review"
                                        className="w-100"
                                        placeholder="Your review *"
                                        rows={rows}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="submit-review-btn">
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Reviews;