import React from 'react';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>Sunday, November 27, 2022</p>
            </div>
        </div>
    );
};

export default Header;