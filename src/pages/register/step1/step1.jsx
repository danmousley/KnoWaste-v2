import React, { useRef } from 'react'
import styles from './step1.scss'
import { useForm } from "react-hook-form";

const Step1 = (props) => {
    const {onSubmit} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const step1Form = useRef(null)
    const step1Submit = useRef(null)

    const checkFormIsValid = (e) => {
        console.log(e.target.value)
        if (step1Form.current.checkValidity()) {
            step1Submit.current.disabled = false
            step1Form.current.classList.add('was-validated')
        }
    }

    return (
        <>
            <form class="needs-validation" ref={step1Form} onSubmit={handleSubmit(onSubmit)} novalidate>
                <section class="container form">
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">First Name</h6>
                            <input {...register("firstName")} type="text" onBlur={(e) => checkFormIsValid(e)} class="form-control form__input" required/>
                            <div class="invalid-feedback">
                                Please enter a valid first name
                            </div>
                        </div>
                        <div class="col">
                            <h6 class="form__label">Last Name</h6>
                            <input {...register("lastName", { required: true })} type="text" className={`form__input ${errors.lastName ? "invalid" : ""} `} />
                            {errors.lastName && <span class="form__error-message">This field is required</span>}
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">Email Address</h6>
                            <input {...register("email", { required: true })} type="email" className={`form__input ${errors.email ? "invalid" : ""} `} />
                            {errors.email && <span class="form__error-message">This field is required</span>}
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">Date of birth</h6>
                            <input {...register("dateOfBirth", { required: true })} type="date" className={`form__input ${errors.dateOfBirth ? "invalid" : ""} `} />
                            {errors.dateOfBirth && <span class="form__error-message">This field is required</span>}
                        </div>
                    </div>
                    <div class="row form__row">
                        <div class="col">
                            <h6 class="form__label">Mobile Number</h6>
                            <input {...register("mobileNo", { required: true })} type="number" className={`form__input ${errors.mobileNo ? "invalid" : ""} `} />
                            {errors.mobileNo && <span class="form__error-message">This field is required</span>}
                        </div>
                    </div>
                </section>

                <div class="buttons container">
                    <div class="row h-100">
                        <div class="col my-auto">
                            <button type="submit" ref={step1Submit} class="btn btn-primary button--form" disabled aria-disabled="true">Next</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Step1;
