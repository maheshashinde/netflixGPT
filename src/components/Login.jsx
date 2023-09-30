import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRef, useState } from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { save } from "../redux/userSlice";
import { BACKGROUND_URL } from "../utilities/constants";
import { checkValidData } from "../utilities/validator";
import Header from "./Header";


const Login = () => {
  

  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullName=useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleFormSubmit = () => {
    console.log("clicked");
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value, 
            photoURL: USER_PHOTO
          }).then(() => {
            const { uid, email, displayName,photoURL } = auth.currentUser;
            dispatch(save({ uid: uid, email: email, displayName: displayName ,photoURL: photoURL}));
          }).catch((error) => {
          });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" - "+errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+errorMessage);
      });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_URL} alt="netflix-bg" className="h-screen object-cover md:w-screen" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[80%] md:w-3/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 "
      >
        <h1 className="font-bold text-4xl mb-6 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className=" mb-6 rounded-sm h-12 px-3 bg-gray-600 w-full"
            type="text"
            placeholder="Enter Full name"
          />
        )}
        <input
          ref={email}
          className=" mb-6 rounded-sm h-12 px-3 bg-gray-600 w-full"
          type="text"
          placeholder="Enter email"
        />
        <input
          ref={password}
          className=" mb-6 rounded-sm h-12 px-3 bg-gray-600 w-full"
          type="password"
          placeholder="Enter password"
        />
        <p className="text-lg text-red-500 font-bold">{errorMessage}</p>
        <div
          className="mt-7 rounded-sm h-12 px-3 bg-red-700 w-9/12 text-center p-3 w-full"
          onClick={handleFormSubmit}
        >
          <button> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        </div>
        {isSignInForm ? (
          <h3 className="py-10 text-left" onClick={toggleSignInForm}>
            <span className="text-gray-400">New to Netflix?</span> Sign up now.
          </h3>
        ) : (
          <h3 className="py-10 text-left" onClick={toggleSignInForm}>
            <span className="text-gray-400">Already registered? </span> Sign In.
          </h3>
        )}

        <p className="text-sm text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
