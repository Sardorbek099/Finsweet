import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer_section'>
      <div className='container'>
        <div className='row'>
            <div className='footer_col1'>
            <img src='./footer/footerlogo.png' alt='logo' />
            </div>
            <div className='footer_col2'>
                <ul className='footer_navbar footer_navbar1'>
                <p className='footer_text'>Our team</p>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>About us</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Team</a>
                    </li>
                    <li className='footer_navbar_item footer_navbar_item1'> 
                        <a href='/about_us' className='footer_navbar_item_link'>What we do</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Contact</a>
                    </li>
                </ul>

                <ul className='footer_navbar'>
                <p className='footer_text'>More</p>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Projects</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Events</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Donate</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Blog</a>
                    </li>
                </ul>
                <ul className='footer_navbar'>
                <p className='footer_text'>Connect</p>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Facebook</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Instagram</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Twitter</a>
                    </li>
                    <li className='footer_navbar_item'> 
                        <a href='/about_us' className='footer_navbar_item_link'>Linkdin</a>
                    </li>
                </ul>
            </div>
            <div className='footer_col3'>
                <p className='footer_short_text'>Subscribe to get latest <br/> updates</p>
                <div className='d-flex'>
                <input placeholder='Your email' className='footer_input'/>
                <button className='footer_button'>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
