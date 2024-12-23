import React, { useState } from 'react'
import './header.css'
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <>
            <div className='header'>
                <a href='/'>
                    <img className='logo' alt='logo'
                     src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=' ></img>
                </a>
                <ul className='nav-items'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

                {(loggedIn)? <button onClick={()=>setLoggedIn(false)}>LogOut</button> : <button onClick={()=>{setLoggedIn(true)}}>LogIn</button>}
            </div>
        </>
    )
}

export default Header