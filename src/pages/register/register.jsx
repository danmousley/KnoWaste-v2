import React, { useState, useEffect } from 'react';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';
import Stepper from './stepper/stepper';
import styles from './register.scss';

const Register = () => {
    const [formStep, setFormStep] = useState(3);
    const name = "name placeholder" // insert name here once we have access to step one of form
    const [formData, setFormData] = useState([]);

    const onSubmit = (data) => {
        console.log(data)
        const updatedFormData = formData.push(data)
        setFormData(updatedFormData)
        setFormStep(2)
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
            return <Step1 onSubmit={onSubmit} handleClick={ handleClick }/>
        } else if (formStep === 2) {
            return <Step2 onSubmit={onSubmit} handleClick={ handleClick }/>
        } else if (formStep === 3) {
            return <Step3 onSubmit={onSubmit} handleClick={ handleClick }/>
        }
    }

    const handleClick = (e) => {
        // e.preventDefault()
        let step = e.target.value
        console.log(step)
        setFormStep(step)
    }

    // useEffect(() => {
    //     getTitle()
    //     getForm()
    // }, [formStep])

    return (
        <>
            <body class="container register">
                <header class="register__title">
                    <h2 class="register__titleText"> { getTitle() } </h2>
                </header>
                <section class="stepper">
                    <Stepper formStep={formStep}/>
                </section>
                <main class="form">
                    { getForm() }
                </main>
            </body>
        </>
    )
}

export default Register;
