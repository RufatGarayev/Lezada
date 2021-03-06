import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Login: React.FC = () => {
    const validationSchema = Yup.object().shape({
        userNameOrEmail: Yup.string()
            .required('Username or Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <title>Lezada - Login</title>
            </Head>

            <section id="breadcrumb">
                <div className="container h-100">
                    <div className="content h-100">
                        <h1>Login</h1>
                        <ul className="breadcrumb-links d-flex">
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>
                                <span>Login</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="login-area account-wrapper">
                                <div className="title">
                                    <h2>Login</h2>
                                    <h6>Great to have you back!</h6>
                                </div>
                                <form onSubmit={handleSubmit((data) => {
                                    console.log(data)
                                })}>
                                    <div className="inputs-wrapper w-100">
                                        <input
                                            type="text"
                                            className={`w-100 ${errors.userNameOrEmail ? "error-border" : ""}`}
                                            placeholder="Username or Email"
                                            {...register("userNameOrEmail")}
                                        />
                                        {errors.userNameOrEmail && <p>{errors.userNameOrEmail.message}</p>}
                                    </div>
                                    <div className="inputs-wrapper w-100">
                                        <input
                                            type="password"
                                            className={`w-100 ${errors.password ? "error-border" : ""}`}
                                            placeholder="Password"
                                            {...register("password")}
                                        />
                                        {errors.password && <p>{errors.password.message}</p>}
                                    </div>
                                    <div className="checkbox-input-wrapper d-flex align-items-center">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Rememeber me</label>
                                    </div>
                                    <div className="not-member d-flex">
                                        <p>Not a member yet?</p>
                                        <Link href="/Register">
                                            <a>Register</a>
                                        </Link>
                                    </div>
                                    <div className="submit-btn login">
                                        <input type="submit" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Login;