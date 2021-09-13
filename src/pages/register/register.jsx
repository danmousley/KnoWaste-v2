import React, { useState } from 'react';

const Register = () => {
    const [formStep, setFormStep] = useState("step1");
    const name = "name placeholder" // insert name here once we have access to step one of form
    const getTitle = () => {
        if (formStep === "step1") {
            return "Let's get started..."
        } else if (formStep === "step2") {
            return `Nice to meet you, ${name}!! 👋`
        } else if (formStep === "step3") {
            return `Final step...`
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
                    Form section
                </div>
            </section>
        </>
    )
}

export default Register
