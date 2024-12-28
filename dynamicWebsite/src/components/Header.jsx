import React from 'react';
import Logo from './components/Logo.jsx'
import { useNavigate } from 'react-router'


function Header() {
    const navigate = useNavigate();
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <header className='font-poppins bg-slate-900 text-white sticky top-0 z-50 mx-auto flex w-full items-center justify-between p-8'>
                <div className='flex items-center space-x-2 cursor-pointer' onClick={() => navigate('/')}>
                <Logo />
                <p className='text-3xl font-medium'>E-Coma</p>
                </div>
                
                <ul className='flex justify-between items-center space-x-8'>
                <li onClick={() => navigate('/home')} className='text-2xl cursor-pointer'>Home</li>
                <li onClick={() => navigate('/login')} className='text-2xl cursor-pointer'>Login</li>
                <li onClick={() => navigate('/signup')} className='text-2xl cursor-pointer'>Signup</li>
                </ul>

                <button onClick={() => navigate('/cart')} className='material-symbols-outlined' style={{ fontSize: '35px' }}>shopping_cart</button>
                
            </header>
        </>
    );
}

export default Header;