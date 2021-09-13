import React, { useState } from 'react';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';
import styles from './register.scss';

const Register = () => {
    const [formStep, setFormStep] = useState(3);
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
            return <Step1 />
        } else if (formStep === 2) {
            return <Step2 />
        } else if (formStep === 3) {
            return <Step3 />
        }
    }

    return (
        <>
            <header>
                <h2> { getTitle() } </h2>
            </header>
            <section>
                <nav>
                    Nav section
                </nav>
                <div>
                    { getForm() }
                </div>
            </section>
        </>
    )
}

export default Register
