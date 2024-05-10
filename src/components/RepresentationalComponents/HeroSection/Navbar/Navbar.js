import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
    return (
        
          <nav className='navbar'>
            <div className='navbar-logo'>
                <div className='navbar-logo-icon'>
                    
                        <img className='.navbar-logo-icon-inside' src='images/Vector.png' alt=''/>
                   
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
            </div >
            <div className='navbar-button'>
            <div className='navbar-button-blue'>My Bookings</div>
            </div>
            </div>
        </nav>
        
    );
}

export default Navbar;
