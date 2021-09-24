import React, {createContext, useState} from 'react';
import Dashboard from '../pages/dashboard/dashboard';
import Login from '../pages/login/login';


export const UserContext = createContext({})

const UserProvider = () => {

    const [user, setUser] = useState("");

    const data = {
        user: user,
        setUser: setUser
    }

    return (
        <UserContext.Provider value={data}>
            <Dashboard />
            <Login />
        </UserContext.Provider>
    )
}

export default UserProvider;
