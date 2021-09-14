import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogIn from '../pages/login/login';
import Register from '../pages/register/register';
import ForgotPassword from '../pages/forgotpassword/forgotpassword';
import Dashboard from '../pages/dashboard/dashboard';
import NotFound from '../shared/notfound/notfound';

// - Install react-router-dom and allow users to navigate to the following pages:
//  "signin", "signout", "register", "forgotpassword", "dashboard", "notfound/404"

const Routes = () => {
    return (
        <Router>
            <Route exact={true} path={["/", "/login"]} component={LogIn} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            <Route path ="/dashboard" component={Dashboard} />
            <Route path="/doesntexist" component={NotFound} />
        </Router>
    )
}

export default Routes
