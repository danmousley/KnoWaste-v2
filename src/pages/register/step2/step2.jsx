import React, { useRef } from 'react';
import styles from './step2.scss';
import { useForm } from "react-hook-form";

const Step2 = (props) => {
    const {handlePreviousClick, onSubmit} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const step2Form = useRef(null)
    const step2Submit = useRef(null)

    const checkFormIsValid = (e) => {
        step2Form.current.classList.add('was-validated')
        console.log(e.target.classList)
        if (step2Form.current.checkValidity()) {
            step2Submit.current.disabled = false
        } else {
            step2Submit.current.disabled = true
        }
    }

    return (
        <>
        <form ref={step2Form} onSubmit={handleSubmit(onSubmit)}>
            <section class="container form">
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Which Halls of Residence do you reside at?</h6>
                        <select {...register("halls", { required: true })} type="text" onBlur={(e) => checkFormIsValid(e)} class="form-control form__input" required >
                            <option value="halls1">Halls 1</option>
                            <option value="halls2">Halls 2</option>                          
                        </select>
                        <div class="invalid-feedback">
                            <span class="form__feedback">Please select your halls</span>
                        </div>
                        <div class="valid-feedback">
                            <span class="form__feedback">Looks good!</span>
                        </div>
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Student No</h6>
                        <input {...register("studentNo", { required: true })} type="number" class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="form__feedback">Please enter a valid student number</span>
                        </div>
                        <div class="valid-feedback">
                            <span class="form__feedback">Looks good!</span>
                        </div>
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Create Password</h6>
                        <input {...register("password", { required: true })} type="password" class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="form__feedback">Please enter a valid password</span>
                        </div>
                        <div class="valid-feedback">
                            <span class="form__feedback">Looks good!</span>
                        </div>
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                    <h6 class="form__label">Confirm Password</h6>
                        <input {...register("password", { required: true })} type="password" class="form-control form__input" required />
                        <div class="invalid-feedback">
                            <span class="form__feedback">Please confirm your password</span>
                        </div>
                        <div class="valid-feedback">
                            <span class="form__feedback">Looks good!</span>
                        </div>
                    </div>
                </div>
            </section>
            <div class="buttons container">
                <div class="row h-100">
                    <div class="col my-auto">
                        <button type="button" onClick={(e) => handlePreviousClick(e)} class="btn btn-secondary button--form" value={2} >Previous</button>
                        <button type="submit" ref={ step2Submit } class="btn btn-primary button--form" disabled>Next</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Step2;
