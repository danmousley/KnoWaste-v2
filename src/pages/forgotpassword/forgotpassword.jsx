import React, { useState, useRef } from 'react';
import './forgotpassword.scss';
import { useHistory } from 'react-router';
import ForgotPasswordForm from './forgotpasswordform/forgotpasswordform';



const ForgottenPassword = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(true);

    const history = useHistory()

    const getTitle = () => {
        return isFormSubmitted ? "Your request has been submitted" : "Forgotten Your Password?";
    }

    const handleSubmit = () => {
        // change to new page
        let path = "/dashboard"
        history.push(path)
    }

    const handlePrevious = () => {
        let path = "/login"
        history.push(path)
    }

    const checkFormIsValid = (e, form, formSubmit) => {
        form.current.classList.add('was-validated')
        console.log(e.target.classList)
        if (form.current.checkValidity()) {
            formSubmit.current.disabled = false
        } else {
            formSubmit.current.disabled = true
        }
    }

    return (
        <>
            <div class="container forgotten-password">
                <header class="forgotten-password__title">
                    <h2 class="forgotten-password__titleText"> { getTitle() } </h2>
                </header>
                <main class="forgotten-password__form">
                    <ForgotPasswordForm handleSubmit={handleSubmit} handlePrevious={handlePrevious} checkFormIsValid={checkFormIsValid}/>
                </main>
            </div>
        </>
    )
}

export default ForgottenPassword;
