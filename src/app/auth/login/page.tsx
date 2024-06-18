"use client";
import React, { useState } from "react";
const apiUrl = "https://chat-api-kappa-tan.vercel.app";

const Login = async() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [device, setDevice] = useState("");
  const [error, setError] = useState("");

  async function login() {
    const response = await fetch(`${apiUrl}/auth/v1/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        device: device
      }),
    });
    const data = await response.json();
    if (response.ok) {
      // router here
      console.log(data)
    } else {
      setError(data.message)
    }
  }
  return (
    <div className="bg-app-bg items-center justify-center min-h-screen grid">
      <div>
        <p>{error}</p>
        <div className="bg-log-tab grid text-gray-300 rounded-lg p-5">
          <input value={email} onChange={(email) => setEmail(email.target.value)} className="outline-none bg-signup-button rounded-md my-2 p-2" type="text"  placeholder="Email"/>
          <input value={password} onChange={(pass) => setPassword(pass.target.value)} className="outline-none bg-signup-button rounded-md my-2 p-2" type="password" placeholder="Password"/>
        </div>
        <div className="bg-login-button rounded-md p-2 mt-7 text-gray-300 text-center">
          <button onClick={() => {
            setDevice("I Phone 15")
            login()
          }}>Login</button>
        </div>
      </div>
    </div>
  ); 
};

export default Login;