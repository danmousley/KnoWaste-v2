import React, { useRef } from 'react';
import './step1.scss';
import { useForm } from "react-hook-form";
import InputFeedback from '../../../shared/forms/inputFeedback/inputFeedback';

const Step1 = (props) => {
    const {onSubmit, checkFormIsValid} = props;
    const { register, handleSubmit } = useForm();
    const step1Form = useRef(null)
    const step1Submit = useRef(null)

    return (
        <>
            <form class="needs-validation" ref={step1Form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <section class="container form">
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">First Name</h6>
                            <input {...register("firstName", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" pattern="^[\p{L}]+$" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid first name</span>
                            </div>
                            <InputFeedback />
                        </div>
                        <div class="col">
                            <h6 class="form__label">Last Name</h6>
                            <input {...register("lastName", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" pattern="^[\p{L}]+$" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid last name</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">Email Address</h6>
                            <input {...register("email", { required: true })} type="email" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid email</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <label for="dateOfBirth" class="form__label">Date of birth</label>
                            <input {...register("dateOfBirth", { required: true })} type="date" id="dateOfBirth" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid date of birth</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">Mobile Number</h6>
                            <input {...register("mobileNo", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" minLength="4" maxLength="16" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid mobile without spaces</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                </section>

                <div class="buttons container">
                    <div class="row h-100">
                        <div class="col my-auto">
                            <button type="submit" ref={step1Submit} class="btn btn-primary button--form" disabled>Next</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Step1;
