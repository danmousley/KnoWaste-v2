import React, { useState } from 'react';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';
import styles from './register.scss';

const Register = () => {
    const [formStep, setFormStep] = useState(1);
    const name = "name placeholder" // insert name here once we have access to step one of form

    const getTitle = () => {
        if (formStep === 1) {
            return "Let's get started..."
        } else if (formStep === 2) {
            return `Nice to meet you, ${name}!! 👋`
        } else if (formStep === 3) {
            return `Final step...`
        }
    }

    const getForm = () => {
        if (formStep === 1) {
            return <Step1 handleClick={ handleClick }/>
        } else if (formStep === 2) {
            return <Step2 handleClick={ handleClick }/>
        } else if (formStep === 3) {
            return <Step3 handleClick={ handleClick }/>
        }
    }

    const handleClick = (e) => {
        e.preventDeafult()
        let step = e.target.value
        setFormStep(step)
    }

    return (
        <>
            <main class="container register">
                <header class="register__title">
                    <h2> { getTitle() } </h2>
                </header>
                <section class="container nav">
                    <nav class="row flex-d">
                        <div class="col nav__item">
                            <h5>STEP 01</h5>
                            <span>Personal Details</span>
                        </div>
                        <div class="col nav__item">
                            <h5>STEP 02</h5>
                            <span>User Details</span>
                        </div>
                        <div class="col nav__item">
                            <h5>STEP 03</h5>
                            <span>Terms & Conditions</span>
                        </div>
                    </nav>
                </section>
                    { getForm() }
                
            </main>
        </>
    )
}

export default Register
