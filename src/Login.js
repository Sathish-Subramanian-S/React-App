import React,{useState} from 'react';
import './Login.css';
import useFormValidation from './useFormValidation';
import validatePwd from './formValidation';


const Login = () => {

    const {errors,handleSubmit,handleChange,userData}=useFormValidation(validatePwd);

return (
    <div>
    <head>
        <title>Metlife Claims</title>
    </head>
      
        <div class="login-box">
          <h1>Login</h1>
          <form>
                <label for="username">Username</label>
                <div>
                    {/* <input type="text" id="username" placeholder="Enter Username"  onChange={handleChange} value = {userData.userName} required></input> */}
                    <input type="text" id="userName" placeholder="Enter Username"  onChange={handleChange}  required></input>
                    <p>{errors.userNameValidateMsg}</p>
                </div>
                <label for="password">Password</label>
                <div>
                    {/* <input type="password" id="password" placeholder="Enter Password"  onChange={handleChange} value = {userData.password} required></input> */}
                    <input type="password" id="password" placeholder="Enter Password"  onChange={handleChange}  required></input>
                    <p>{errors.pwdValidateMsg}</p>
                </div>
                <div class="buttonstyle">  
                    <button type="button" onClick={handleSubmit} >Login</button>
                </div>
          </form>
        </div>
    </div>

 );
};

export default Login;