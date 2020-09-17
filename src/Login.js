import React from 'react';
import useFormValidation from './useFormValidation';
import validatePwd from './formValidation';
import NavBar from "./NavBar";

const Login = () => {

    const { errors, handleSubmit, handleChange } = useFormValidation(validatePwd);

    return (

        <div>
            <NavBar />
            <div className="login-box">
                <h1>Login</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <div>
                        <input type="text" id="userName" placeholder="Enter Username" onChange={handleChange} required></input>
                        <p>{errors.userNameValidateMsg}</p>
                    </div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" id="password" placeholder="Enter Password" onChange={handleChange} required></input>
                        <p className='err-msg'>{errors.pwdValidateMsg}</p>
                    </div>
                    <div className="buttonstyle">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit} >Login</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;