import React from 'react';
import './style.scss';
import Logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <header>
            <div className='wrap'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                </div>
            </div>
        </header>
    )
}

export default Header;
