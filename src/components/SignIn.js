import { useState, useRef } from "react";
import Header from "./Header";
import { auth } from "../Utils/firebase";
import { checkValidate } from "../Utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [isSignedIn, setIsSignedIn] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const toggleSignUp = () => {
        setIsSignedIn(!isSignedIn);
    }

    const handleButtonClick = () => {
        const mesg = checkValidate(email.current.value, password.current.value);
        setErrorMessage(mesg);
        if (mesg) return;

        //Sign In Sign Up Logic
        if (!isSignedIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        } else {
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorCode+errorMessage);
                });
        }
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="bg-image.jpg" alt="bgimage" className=" w-screen" />
            </div>
            <form className="absolute p-12 py-10 bg-black w-3/12 mt-28 mx-auto right-0 left-0  bg-opacity-80"
                onSubmit={(e) => e.preventDefault()} >
                <h1 className="font-bold text-3xl py-4 text-white">
                    {isSignedIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignedIn &&
                    <input type="text" placeholder="Enter your name..." className="p-2 my-3 w-full bg-slate-200" />
                }
                <input
                    ref={email}
                    type="text"
                    placeholder="Enter your email..."
                    className="p-2 my-3 w-full bg-slate-200" />

                <input
                    ref={password}
                    type="password"
                    placeholder="Enter your password..."
                    className="p-2 my-3 w-full bg-slate-200" />

                <p className="py-2 text-sm font-bold text-red-500">
                    {errorMessage}
                </p>

                <button className="p-2 my-4 bg-red-700 w-full hover:bg-red-500" onClick={handleButtonClick}>
                    {isSignedIn ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 text-white" onClick={toggleSignUp}>
                    {isSignedIn ? "New to Netflix ? Sign Up Now" :
                        "Already registered?Sign in Now"}
                </p>
            </form>
        </div>
    )
}
export default SignIn;
