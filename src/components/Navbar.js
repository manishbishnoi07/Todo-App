import React from 'react'
import "./Navbar.css"
import { Avatar, Button } from '@material-ui/core';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {user}=useSelector(state=>state.auth)
    
    return (
        <nav>
            <div className="navbar">

                {/* Navbar Left Section */}
                <div className="navbar__left">
                    <h3>Todo App</h3>
                </div>

                {/* Navbar Right Section */}
                <div className="navbar__right">
                    <Button onClick={()=>auth.signOut()}>Sign Out</Button>
                    <Avatar className='avatar' alt="profile" src={user?.photoURL} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
