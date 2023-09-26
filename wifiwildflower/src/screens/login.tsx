import React from 'react';
import { getAuth, signInAnonymously } from "firebase/auth";



const Login = () => {
    const auth = getAuth();
    return (
        <header className="App-header">
            <button onClick={() => signInAnonymously(auth)}>
            Login Anonymously
            </button>
        </header>
    );
}

export default Login;
