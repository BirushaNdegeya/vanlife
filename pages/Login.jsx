import React, { useState } from "react";

const Login = () => {

   const [loginFormData, setLoginFormData] = useState({
      email: "",
      password: "",
   });

   const handleSubmit = (ev) => {
      ev.preventDefault();
      console.log(loginFormData.email, loginFormData.password);
      setLoginFormData({
         email: "",
         password: "",
      });
   }

   const handleChange = (ev) => {
      const { name, value} = ev.target;
      setLoginFormData(prev => ({
         ...prev,
         [name] : value,
      }))
   }

   return (
      <div className="login-container">
         <h1>Sign in to your account</h1>
         <form onSubmit={handleSubmit} className="login-form">
            <input
               placeholder="Email address"
               onChange={handleChange}
               type="text"
               name="email"
               value={loginFormData.email}
            />
            <input
               placeholder="Password"
               type="password"
               name="password"
               value={loginFormData.password}
               onChange={handleChange}
            />
            <button type="submit">Log in</button>
         </form>
      </div>
   );
};

export default Login;