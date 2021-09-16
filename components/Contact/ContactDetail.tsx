import React from 'react';
import { ContactDetailsData } from './ContactDetailsData';

const ContactDetail: React.FC = () => {
    return (
        <section id="contact-detail">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title">
                            <h1>Contact Detail</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        ContactDetailsData.map(item => (
                            <div key={item.id} className="col-lg-4">
                                <div className="contact-item">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h6 className="title">{item.title}</h6>
                                    <p className="text">{item.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default ContactDetail;