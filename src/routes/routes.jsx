import React from 'react';
import { Router } from "@reach/router";
import LogIn from '../pages/login';
import Register from '../pages/register';
import ForgotPassword from '../pages/forgotpassword';
import Dashboard from '../pages/dashboard';
import NotFound from '../shared/notfound';

// - Install react-router-dom and allow users to navigate to the following pages:
//  "signin", "signout", "register", "forgotpassword", "dashboard", "notfound/404"

const Routes = () => {
    return (
        <Router>
            <LogIn path={["/", "login"]} />
            <Register path="/register" />
            <ForgotPassword path="/forgotpassword" />
            <Dashboard path ="/dashboard" />
            <NotFound default path="/doesntexist" />
        </Router>
    )
}

export default Routes
