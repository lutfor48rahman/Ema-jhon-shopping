import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const handleLogin=()=>{
        navigate('/login');
    }

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                    <button onClick={handleSignOut}>Signout</button>
                    :
                    <Link to="/login" onClick={handleLogin}>Login</Link>}
            </div>
        </nav>
    );
};

export default Header;