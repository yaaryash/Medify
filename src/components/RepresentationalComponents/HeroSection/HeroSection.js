import React from 'react'
import './HeroSection.css'
import Navbar from './Navbar/Navbar' 
import Content from './Content/Content'

export default function HeroSection() {
  return (
    <div className='heroSection-outer'>
        {/* <nav className='navbar'>
            <div className='navbar-logo'>
                <div className='navbar-logo-icon'>
                    <div className='.navbar-logo-icon-inside'>M</div>
                </div>
                <div className='navbar-logo-text'>Medify</div>
            </div>
            
            <div className='navbar-items'>
            <div className='navbar-items-subset'>
            <div>Find Doctors</div>
            <div>Hospitals</div>
            <div>Medicines</div>
            <div>Surgeries</div>
            <div>Software for Providers</div>
            <div>Facilities</div>
            </div>
            <div className='navbar-button-blue'>My Bookings</div>
            </div>
        </nav> */}
        <Navbar />
        <Content />
    </div>
  )
}
