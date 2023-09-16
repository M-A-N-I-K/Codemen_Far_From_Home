import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../Config/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const LoginSignUp = ({ showName, authName, showForgotPassword }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) setTimeout(navigate("/home"), [1000]);
    }, [user, loading]);

    const login = () => {
        logInWithEmailAndPassword(email, password);
    }
    const signup = () => {
        if (!name) {
            alert("Please enter name")
            return;
        };
        registerWithEmailAndPassword(name, email, password);
    }
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
            <h1 className="font-bold text-2xl">Welcome Back to Mind वैद्य :)</h1>
            <form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                {
                    showName &&
                    <>
                        <label className="font-semibold text-xs" htmlFor="usernameField">Name</label>
                        <input className="flex items-center h-8 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => setName(e.target.value)} />
                    </>
                }
                <label className="font-semibold text-xs" htmlFor="usernameField">Username or Email</label>
                <input className="flex items-center h-8 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" onChange={() => setEmail(e.target.value)} />
                <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                <input className="flex items-center h-8 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" onChange={() => setPassword(e.target.value)} />
                <button className="flex items-center justify-center h-8 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" onClick={authName === "Login" ? login : signup}>{authName}</button>

                <button
                    type='button'
                    className="mt-2 px-4 py-2 border flex justify-center items-center  gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span className='text-xs' onClick={signInWithGoogle}>{authName} with Google</span>
                </button>
                {
                    showForgotPassword &&
                    <div className="flex mt-6 justify-center text-xs">
                        <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                        <span className="mx-2 text-gray-300">/</span>
                        <Link to="/signup" className="text-blue-400 hover:text-blue-500">Sign Up</Link>
                    </div>
                }

            </form>
        </div>

    );
}

export default LoginSignUp
