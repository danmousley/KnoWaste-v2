import React, { useState, useEffect } from 'react';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';
import Stepper from './stepper/stepper';
import styles from './register.scss';
import { useHistory } from 'react-router';

const Register = () => {
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState([]);
    const [name, setName] = useState([]);

    const history = useHistory()

    const checkFormIsValid = (e, form, formSubmit) => {
        form.current.classList.add('was-validated')
        console.log(e.target.classList)
        if (form.current.checkValidity()) {
            formSubmit.current.disabled = false
        } else {
            formSubmit.current.disabled = true
        }
    }

    const onSubmit = (data) => {
        console.log(data)
        // let updatedFormData = formData
        // console.log(updatedFormData)
        // updatedFormData.push(data)
        // setFormData(updatedFormData)
        setName(data.firstName);
        if (formStep === 1 || formStep === 2) {
            let newStep = formStep + 1
            setFormStep(newStep)
        }
        if (formStep === 3) {
            let path = "/dashboard"
            history.push(path)
        }
    }

    const handleStepper = (e, step) => {
        if (step < formStep) {
            console.log(step)
            setFormStep(step)
        }
    }

    const handlePreviousClick = (e) => {
        e.preventDefault()
        let newStep = formStep - 1
        setFormStep(newStep)
    }

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
            return <Step1 checkFormIsValid={checkFormIsValid} onSubmit={onSubmit}/>
        } else if (formStep === 2) {
            return <Step2 checkFormIsValid={checkFormIsValid} onSubmit={onSubmit} handlePreviousClick={ handlePreviousClick }/>
        } else if (formStep === 3) {
            return <Step3 checkFormIsValid={checkFormIsValid} onSubmit={onSubmit} handlePreviousClick={ handlePreviousClick }/>
        }
    }


    return (
        <>
            <body class="container register">
                <header class="register__title">
                    <h2 class="register__titleText"> { getTitle() } </h2>
                </header>
                <section class="stepper">
                    <Stepper handleStepper={handleStepper} formStep={formStep}/>
                </section>
                <main class="form">
                    { getForm() }
                </main>
            </body>
        </>
    )
}

export default Register;
