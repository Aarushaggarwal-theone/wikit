import React from "react";
// import 'firebaseui'
import {initializeApp}from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import Header from "@/components/Header";


function Auth() {
    const clientCredentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
}


    const appNew = initializeApp(clientCredentials)
    const auth = getAuth(appNew);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });}

    return (
    <div className={`flex items-center justify-center h-screen bg-black`}>
      <Header />
      <div className={`bg-black max-w-lg w-full border border-2 shadow-md shadow-violet-500 border-violet-500 rounded-lg text-white p-10`}>
        <h2 className={`text-4xl font-bold mb-4 text-center`}>Login</h2>
        <form>
          <div className={`mb-4`}>
            <label className={`block text-white text-sm font-bold mb-2`} htmlFor="email">
              Email
            </label>
            <input
              className={`shadow appearance-none border border-2 border-violet-500 shadow-2xl shadow-violet-500 bg-black rounded-xl rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="email"
              type="email"
              placeholder="Enter your email"
              required
               onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={`mb-6`}>
            <label className={` text-white text-sm font-bold mb-2`} htmlFor="password">
              Password
            </label>
            <input
              className={`shadow appearance-none bg-black border border-2 border-violet-500 shadow-2xl shadow-violet-500 rounded-xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={`flex items-center justify-between`}>
          <button onClick={(e) => handleSubmit(e) } className={`bg-black border border-1 border-violet-500 shadow-violet-500/50 shadow-xl text-white font-bold py-2 px-4 rounded-md mt-4`}>
              Login
            </button>
            
              Dont have an account?<a
              className={`inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800`}
              href="#"
            > Sign Up!
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth;