import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt='logo'/>
        <div className="desktopMenu"></div>
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Projects</Link>
        <button className="desktopMenuBtn">
           <img src={contactImg} alt="chat-box" className="desktopMenuImg" /> Contact Me 
            </button>
    </nav>

  )
}

export default Navbar

