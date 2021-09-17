import React, { useRef } from 'react';
import './forgotpasswordform.scss';
import { useForm } from "react-hook-form";
import InputFeedback from '../../../shared/forms/inputFeedback/inputFeedback';

const ForgotPasswordForm = (props) => {
    const forgotPasswordForm = useRef(null)
    const fpSubmitButton = useRef(null)
    const { checkFormIsValid, onSubmit, handlePrevious } = props;

    const { register, handleSubmit } = useForm();
    

    return (
        <form class="needs-validation" ref={forgotPasswordForm} onSubmit={handleSubmit(onSubmit)} noValidate>
            <section class="container forgot-password-form">
            <div class="row forgot-password-form__row">
                    <div class="col">
                        <p class="forgot-password-form__prompt">Can't remember what your password is? That's no worries, we all make mistakes.
                            Please enter your email address and student number below and we'll send a link to your email
                            in which you can change your password. Thank you :)
                        </p>
                    </div>
                </div>
                <div class="row forgot-password-form__row">
                    <div class="col">
                        <h6 class="forgot-password-form__label">Email Address</h6>
                        <input {...register("email", { required: true })} type="email" onBlur={(e) => checkFormIsValid(e, forgotPasswordForm, fpSubmitButton)} class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="forgot-password-form__feedback">Please enter a valid email</span>
                        </div>
                        <InputFeedback />
                    </div>
                </div>
                <div class="row forgot-password-form__row">
                <div class="col">
                    <h6 class="forgot-password-form__label">Student No</h6>
                    <input {...register("studentNo", { required: true })} type="number" min="0" onBlur={(e) => checkFormIsValid(e, forgotPasswordForm, fpSubmitButton)} class="form-control form__input" required />
                    <div class="invalid-feedback">
                        <span class="forgot-password-form__feedback">Please enter a valid student number</span>
                    </div>
                    <InputFeedback />
                </div>
                </div>
                <div class="forgot-password-buttons container">
                    <div class="row h-100">
                        <div class="col my-auto p-0">
                            <button type="button" onClick={ handlePrevious } class="btn btn-secondary button--forgot-password-form" >Previous</button>
                            <button type="submit" ref= { fpSubmitButton } class="btn btn-primary button--forgot-password-form" disabled >Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default ForgotPasswordForm;

