import React, { useState } from 'react';
import './forgotpassword.scss';
import { useHistory } from 'react-router';
import ForgotPasswordForm from './forgotpasswordform/forgotpasswordform';
import RequestSubmitted from './requestsubmitted/requestsubmitted';



const ForgottenPassword = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const history = useHistory()

    const getTitle = () => {
        return isFormSubmitted ? "Your request has been submitted" : "Forgotten Your Password?";
    }

    const getContent = () => {
        return isFormSubmitted ? <RequestSubmitted handlePrevious={handlePrevious} handleLogin={handleLogin} /> : <ForgotPasswordForm onSubmit={onSubmit} handlePrevious={handlePrevious} checkFormIsValid={checkFormIsValid}/>;
    }

    const onSubmit = (data) => {
        // use data to see if email and student no are in database
        setIsFormSubmitted(true)
    }

    const handlePrevious = () => {
        if (isFormSubmitted === false) {
            console.log("previous works")
            let path = "/login"
            history.push(path)
        } else {
            setIsFormSubmitted(false)
        }
    }

    const handleLogin = () => {
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
                    { getContent() }
                </main>
            </div>
        </>
    )
}

export default ForgottenPassword;
