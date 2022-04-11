import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ]=useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    if(user){
        navigate('/shop');
    }
    const handleEmailBlur =(event) =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur =(event) =>{
        setPassword(event.target.value);
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
        setSuccess('Successfully logged in!!!');
        
    }
   
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p>
                        {success}
                    </p>
                    <input className='form-submit' type="submit" value="login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;