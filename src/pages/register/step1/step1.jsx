import React, { useRef } from 'react';
import './step1.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import InputFeedback from '../../../shared/forms/inputFeedback/inputFeedback';
import * as yup from "yup";

const Step1 = (props) => {
    const {onSubmit, checkFormIsValid} = props;
    const step1Form = useRef(null)
    const step1Submit = useRef(null)

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        dateOfBirth: yup.string().required(),
        mobileNo: yup.number().required(),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <>
            <form class="needs-validation" ref={step1Form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <section class="container form">
                    <div class="row form__row">
                        <div class="col">
                            <label class="form__label">First Name</label>
                            <input {...register("firstName", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" pattern="^[\p{L}]+$" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid first name</span>
                            </div>
                            <InputFeedback />
                        </div>
                        <div class="col">
                            <label class="form__label">Last Name</label>
                            <input {...register("lastName", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" pattern="^[\p{L}]+$" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid last name</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <label class="form__label">Email Address</label>
                            <input {...register("email", { required: true })} type="email" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid email</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <label htmlFor="dateOfBirth" class="form__label">Date of birth</label>
                            <input {...register("dateOfBirth", { required: true })} type="date" id="dateOfBirth" onBlur={(e) => checkFormIsValid(e, step1Form, step1Submit)} class="form-control form__input" required />
                            <div class="invalid-feedback">
                                <span class="form__feedback">Please enter a valid date of birth</span>
                            </div>
                            <InputFeedback />
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <label class="form__label">Mobile Number</label>
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
