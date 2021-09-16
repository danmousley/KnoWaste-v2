import React, { useRef } from 'react';
import styles from './step3.scss';
import { useForm } from "react-hook-form";

const Step3 = (props) => {
    const {handlePreviousClick, onSubmit, checkFormIsValid} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const step3Form = useRef(null)
    const step3Submit = useRef(null)

    return (
        <>
        <form ref={ step3Form } onSubmit={handleSubmit(onSubmit)}>
            <section class="form">
                <h5 class="form__title">Our Terms & Conditions</h5>
                <div class="form__termsContainer">
                    <p class="form__terms">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, 
                        atque. Nesciunt alias voluptas hic quidem sit voluptate tempora ad voluptates 
                        facere nam debitis, in enim nihil tenetur rerum dolorem ex?
                    </p>
                    <p class="form__terms">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Esse enim quis, voluptatem saepe et, voluptas architecto velit illo eligendi optio quaerat quae atque earum sunt? 
                    </p>
                </div>
                <div class="form-check py-2 px-4">
                    <input class="form-check-input" type="checkbox" onClick={(e) => checkFormIsValid(e, step3Form, step3Submit)} required/>
                    <label class="form-check-label form__termsLabel" for="flexCheckDefault">
                        By ticking this box, you have acknoledged that you have read and agree to our terms and conditions.
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox"/>
                    <label class="form__optinLabel" for="flexCheckChecked">
                        Opt-in to receive emails regarding any further announcements or information regarding new features or Knowaste products.
                    </label>
                </div>
            </section>
            <div class="buttons my-auto">
                <button type="button" onClick={(e) => handlePreviousClick(e)} class="btn btn-secondary button--form" value={2} >Previous</button>
                <button type="submit" ref= { step3Submit } class="btn btn-primary button--form" disabled >Create Account</button>
            </div>
        </form>
        </>
    )
}

export default Step3;
