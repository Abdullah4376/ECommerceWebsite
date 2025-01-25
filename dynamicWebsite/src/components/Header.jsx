import React, { useState } from 'react';
import Logo from './Logo.jsx'
import { useNavigate } from 'react-router'


function Header() {
    const navigate = useNavigate();
    const [cartPrice, setCartPrice] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <header className='font-poppins border-b-[1px] sticky top-0 z-50 bg-white shadow-md flex items-center justify-between mx-auto w-full p-8'>
                <div className='flex items-center space-x-28'>
                    <div className='flex items-center space-x-2 cursor-pointer' onClick={() => navigate('/')}>
                        <Logo />
                        <p className='text-3xl font-medium'>E-Coma</p>
                    </div>
                    <div className='border rounded-3xl flex items-center px-4 py-3 gap-3'>
                        <span className='material-symbols-outlined text-slate-700'>search</span>
                        <input type="text" placeholder='Search for...' className='text-slate-700 border-none outline-none w-[500px]' />
                    </div>
                </div>
                
                {/* <ul className='flex justify-between items-center space-x-8'>
                <li onClick={() => navigate('/')} className='text-2xl cursor-pointer'>Home</li>
                <li onClick={() => navigate('/login')} className='text-2xl cursor-pointer'>Login</li>
                <li onClick={() => navigate('/signup')} className='text-2xl cursor-pointer'>Signup</li>
                </ul> */}
                
                <div className='flex items-center justify-between gap-4'>
                    <div className='border rounded-3xl p-3 px-4 flex justify-around gap-2 cursor-pointer hover:bg-black hover:text-white duration-300' onClick={() => navigate('/login')}>
                        <span className='material-symbols-outlined'>account_circle</span>
                        <p>Account</p>
                    </div>
                    <div onClick={() => navigate('/cart')} className='cursor-pointer border rounded-3xl p-3 px-4 flex justify-around gap-2 hover:bg-black hover:text-white duration-300'>
                        <button className='material-symbols-outlined'>shopping_cart</button>
                        <p>${cartPrice + '.00'}</p>
                        <p className='ml-1'>({cartQuantity})</p>
                    </div>
                </div>
                
            </header>
        </>
    );
}

export default Header;