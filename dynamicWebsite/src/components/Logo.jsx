import React from 'react';
import LogoImg from '../images/LogoImg.png'

function Logo() {
    return (
        <div className='h-10'>
            <img src={LogoImg} alt="Logo" className='h-full'/>
        </div>
    );
}

export default Logo;