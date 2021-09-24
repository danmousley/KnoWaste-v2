import React, {useContext} from 'react';
import './login.scss';
import { useHistory } from 'react-router';
import LogInForm from './loginform/loginform';
import { UserContext } from '../../context/UserProvider';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LogIn = () => {

    const userContext = useContext(UserContext);

    const history = useHistory()

    const handleLogin = (data) => {
        const email = data.email
        const studentNo = data.studentNo
        const password = data.password
        console.log(email, studentNo, password)

        signInWithEmailAndPassword(getAuth(app), email, password).then(response => {
            // userContext.setUser(response.user.email)
            // write function to check if studentNo is in database
            let path = "/dashboard"
            history.push(path)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error code: ${errorCode}. Error message: ${errorMessage}`)
        })

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
