import React, { useRef } from 'react';
import './loginform.scss';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputFeedback from '../../../shared/forms/inputFeedback/inputFeedback';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LogInForm = (props) => {
    const loginForm = useRef(null)
    const loginButton = useRef(null)
    const { checkFormIsValid, handleLogin, handleSignUp } = props;

    const schema = yup.object().shape({
        email: yup.string().required(),
        studentNo: yup.number().required(),
        password: yup.string().required(),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    

    return (
        <form class="needs-validation" ref={loginForm} onSubmit={handleSubmit(handleLogin)} noValidate>
            <section class="container login-form">
                <div class="row login-form__row">
                    <div class="col">
                        <h6 class="login-form__label">Email Address</h6>
                        <input {...register("email", { required: true })} type="email" onBlur={(e) => checkFormIsValid(e, loginForm, loginButton)} class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="login-form__feedback">Please enter a valid email</span>
                        </div>
                        <InputFeedback />
                    </div>
                </div>
                <div class="row login-form__row">
                <div class="col">
                    <h6 class="login-form__label">Student No</h6>
                    <input {...register("studentNo", { required: true })} type="number" min="0" onBlur={(e) => checkFormIsValid(e, loginForm, loginButton)} class="form-control form__input" required />
                    <div class="invalid-feedback">
                        <span class="login-form__feedback">Please enter a valid student number</span>
                    </div>
                    <InputFeedback />
                </div>
                </div>
                <div class="row login-form__row">
                    <div class="col">
                        <h6 class="login-form__label">Password</h6>
                        <input {...register("password", { required: true })} type="password" onBlur={(e) => checkFormIsValid(e, loginForm, loginButton)} class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="login-form__feedback">Please enter a valid password</span>
                        </div>
                        <InputFeedback />
                        <Link to="/forgotpassword" style={{ textDecoration: 'none' }}><span class="login-form__forgotten">Forgotten your password?</span></Link>
                    </div>
                </div>
                <div class="login-buttons container">
                    <div class="row h-100">
                        <div class="col my-auto p-0">
                            <button type="button" onClick={ handleSignUp } class="btn btn-secondary button--login-form" >Sign Up</button>
                            <button type="submit" ref= { loginButton } class="btn btn-primary button--login-form" disabled >Log In</button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default LogInForm;
