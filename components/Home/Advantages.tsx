import React from 'react';
import { FaMoneyCheckAlt, FaPlane } from 'react-icons/fa';
import { ImCreditCard, ImHeadphones } from 'react-icons/im';

interface IAdvantagesData {
    id: number;
    icon: JSX.Element;
    text: string;
};

const Advantages: React.FC = () => {
    const AdvantagesData: IAdvantagesData[] = [
        { id: 1, icon: <FaPlane />, text: "FREE SHIPPING WORLD WIDE" },
        { id: 2, icon: <FaMoneyCheckAlt />, text: "100% MONEY BACK GUARANTEE" },
        { id: 3, icon: <ImCreditCard />, text: "MANY PAYMENT GATWAYS" },
        { id: 4, icon: <ImHeadphones />, text: "24/7 ONLINE SUPPORT" }
    ];

    return (
        <section id="advantages">
            <div className="container">
                <div className="row">
                    {
                        AdvantagesData.map(item => (
                            <div key={item.id} className="col-lg-3">
                                <div className="item">
                                    <div className="icon">{item.icon}</div>
                                    <p className="text-center mt-4">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Advantages;