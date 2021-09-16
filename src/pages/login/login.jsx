import React, { useState, useRef } from 'react';
import './login.scss';
import { useHistory } from 'react-router';
import LogInForm from './loginform/loginform';

const LogIn = () => {
    const logInButton = useRef(null)
    const history = useHistory()

    const handleLogin = () => {
        let path = "/dashboard"
        history.push(path)
    }

    const handleSignUp = () => {
        let path = "/register"
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
            <div class="container login">
                <header class="login__title">
                    <h2 class="login__titleText"> Welcome Back!! 👋 </h2>
                </header>
                <main class="login__form">
                    <LogInForm checkFormIsValid={checkFormIsValid} handleSignUp={handleSignUp} handleLogin={handleLogin} />
                </main>
            </div>
        </>
    )
}

export default LogIn;
