import React from 'react';
import Image from 'next/image';

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
            img: <Image src='/../public/images/users/user1.jpeg' alt="user" layout='fill' />,
            title: "Scott James",
            userRating: "★★★★★",
            date: "April 5, 2020",
            message: "Thanks for always keeping your HTML themes up to date. Your level of support and dedication is second to none."
        },
        {
            id: 2,
            img: <Image src='/../public/images/users/user2.jpeg' alt="user" layout='fill' />,
            title: "Owen Christ",
            userRating: "★★★★★",
            date: "April 7, 2020",
            message: "I didn’t expect this poster to arrive folded. Now there are lines on the poster and one sad Ninja."
        },
        {
            id: 3,
            img: <Image src='/../public/images/users/user3.jpeg' alt="user" layout='fill' />,
            title: "Edna Watson",
            userRating: "★★★★★",
            date: "April 9, 2020",
            message: "Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!"
        }
    ];

    return (
        <div className="reviews">
            <div className="users-comments">
                <ul>
                    {
                        UsersData.map(item => (
                            <li key={item.id}>
                                <div className="user-item d-flex">
                                    <div className="img">{item.img}</div>
                                    <div className="info">
                                        <span>{item.userRating}</span>
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
        </div>
    )
};

export default Reviews;