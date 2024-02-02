import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar_section'>
      <div className='container'>
      <div className='d-flex justify-content-between big_div'>
      <div className='forLogo'>
        <Link to={'/'}>
        <img src='Logo.png' alt='logo'/>
        </Link>
      </div>
      <div className='forItems'>
        <ul className='navbar'>
            <li className='navbar_item'>
                <Link className='navbar_item_link' to={'/'}>Home</Link>
            </li>
            <li className='navbar_item'>
                <Link className='navbar_item_link' to={'/about_us'}>About us</Link>
            </li>
            <li className='navbar_item'>
                <Link className='navbar_item_link' to={'/what_we_do'}>What We Do</Link>
            </li>
            <li className='navbar_item'>
                <Link className='navbar_item_link' to={'/media'}>Media</Link>
            </li>
            <li className='navbar_item'>
                <Link className='navbar_item_link' to={'/contact'}>Contact</Link>
            </li>
        </ul>
        <button className='navbar_button'>Donate</button>
      </div>
      </div>
      </div>
    </div>
  )
}
