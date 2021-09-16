import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const GetInTouch: React.FC = () => {
    const [rows] = useState<number>(5);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        subject: Yup.string()
            .required('Subject is required'),
        message: Yup.string()
            .required('Message is required')
            .min(20, 'Message must be at least 20 characters')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    return (
        <section id="get-in-touch">
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
            })}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title text-center">
                                <h1>Get In Touch</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="inputs-wrapper w-100">
                                        <input
                                            type="text"
                                            className={`w-100 ${errors.name ? "error-border" : ""}`}
                                            placeholder="Name *"
                                            {...register("name")}
                                        />
                                        {errors.name && <p>{errors.name.message}</p>}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="inputs-wrapper w-100">
                                        <input
                                            type="text"
                                            className={`w-100 ${errors.email ? "error-border" : ""}`}
                                            placeholder="Email *"
                                            {...register("email")}
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="inputs-wrapper w-100">
                                        <input
                                            type="text"
                                            className={`w-100 ${errors.subject ? "error-border" : ""}`}
                                            placeholder="Subject *"
                                            {...register("subject")}
                                        />
                                        {errors.subject && <p>{errors.subject.message}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="textarea-wrapper">
                                        <textarea
                                            rows={rows}
                                            className={`w-100 ${errors.message ? "error-border" : ""}`}
                                            placeholder="Message *"
                                            {...register("message")}
                                        >
                                        </textarea>
                                        {errors.message && <p>{errors.message.message}</p>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="send-msg-btn-wrapper d-flex justify-content-center">
                                        <button type="submit" className="send-msg-btn btn-style">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
};

export default GetInTouch;