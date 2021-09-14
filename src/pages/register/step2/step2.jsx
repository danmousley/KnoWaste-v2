import React from 'react';
import styles from './step2.scss';
import { useForm } from "react-hook-form";

const Step2 = (props) => {
    const {handleClick} = props;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => { //how do I move this to register?
        console.log(data)
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <section class="container form">
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Which Halls of Residence do you reside at?</h6>
                        <select {...register("halls", { required: true })} type="text" className={`form__input ${errors.halls ? "invalid" : ""} `}>
                            <option value="halls1">Halls 1</option>
                            <option value="halls2">Halls 2</option>
                        {errors.halls && <span class="form__error-message">This field is required</span>}                          
                        </select>
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Student No</h6>
                        <input {...register("studentNo", { required: true })} type="number" className={`form__input ${errors.studentNo ? "invalid" : ""} `} />
                        {errors.studentNo && <span class="form__error-message">This field is required</span>}
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                        <h6 class="form__label">Create Password</h6>
                        <input {...register("password", { required: true })} type="password" className={`form__input ${errors.password ? "invalid" : ""} `} />
                        {errors.password && <span class="form__error-message">This field is required</span>}
                    </div>
                </div>
                <div class="row form__row">
                    <div class="col">
                    <h6 class="form__label">Confirm Password</h6>
                        <input {...register("password", { required: true })} type="password" className={`form__input ${errors.password ? "invalid" : ""} `} />
                        {errors.password && <span class="form__error-message">This field is required</span>}
                    </div>
                </div>
            </section>
            <div class="buttons container">
                <div class="row h-100">
                    <div class="col my-auto">
                        <button type="button" onClick={e => handleClick(e)} class="btn btn-secondary button--form" value={2} >Previous</button>
                        <button type="button" onClick={e => handleClick(e)} class="btn btn-primary button--form" value={2} >Next</button>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}

export default Step2;
