import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img className='logo' alt='logo'
                        src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=' ></img>
                </Link>
                <ul className='nav-items'>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li>Cart</li>
                </ul>

                {(loggedIn) ? <button onClick={() => setLoggedIn(false)}>LogOut</button> : <button onClick={() => { setLoggedIn(true) }}>LogIn</button>}
            </div>
        </>
    )
}

export default Header