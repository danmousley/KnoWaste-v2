import React, { useState } from 'react';
import Step1 from './step1/step1';
import Step2 from './step2/step2';
import Step3 from './step3/step3';
import Stepper from './stepper/stepper';
import './register.scss';
import { useHistory } from 'react-router';
import { firestore } from '../../firebase';
import { collection, addDoc, setDoc } from "firebase/firestore";
import { parse } from "date-fns";


const Register = () => {
    const [formStep, setFormStep] = useState(1);
    const [step1Data, setStep1Data] = useState([]);
    const [step2Data, setStep2Data] = useState([]);
    const [name, setName] = useState({});

    const history = useHistory()

    const checkFormIsValid = (e, form, formSubmit) => {
        form.current.classList.add('was-validated')
        if (form.current.checkValidity()) {
            formSubmit.current.disabled = false
        } else {
            formSubmit.current.disabled = true
        }
    }

    const onSubmit = async (data) => {
        const usersCollection = collection(firestore, "users")
        
        if (formStep === 1) {
            setName(data.firstName);
            data.dateOfBirth = parse(data.dateOfBirth, "yyyy-MM-dd", new Date());
            setStep1Data(data)
            let newStep = formStep + 1
            setFormStep(newStep)
        }
        if (formStep === 2) {
            setStep2Data(data)
            console.log(data)
            console.log(step1Data)
            let newStep = formStep + 1
            setFormStep(newStep)
        }
        if (formStep === 3) {
            const docRef = await addDoc(usersCollection, step1Data);
            setDoc(docRef, step2Data, { merge: true })
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
            <div class="container register">
                <header class="register__title">
                    <h2 class="register__titleText"> { getTitle() } </h2>
                </header>
                <section class="stepper">
                    <Stepper handleStepper={handleStepper} formStep={formStep}/>
                </section>
                <main class="form">
                    { getForm() }
                </main>
            </div>
        </>
    )
}

export default Register;
