import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [user] = useAuthState(auth);

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const navigate = useNavigate();

    

    // if(user){
    //     navigate('/login');
    // }

    const handleNameBlur = (event) =>{
        setName(event.target.value);
    }
    // const handleEmailBlur = (event) =>{
    //     setEmail(event.target.value);
    // }

    const handleAddressBlur = (event) =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur =(event) =>{
        setPhone(event.target.value);
    }

    const handleShipment =(event)=>{
        event.preventDefault();

     const shipping = {name,email,address,phone};
     alert(JSON.stringify(shipping));
        
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Order Shipping</h2>
                <form onSubmit={handleShipment}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name='phone' required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
               
            </div>
        </div>
    );
};

export default Shipment;