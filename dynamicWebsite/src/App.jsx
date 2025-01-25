import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className='font-poppins text-[#1d1d1d]'>
      <Header />
        <Outlet />
      <Footer />
    </div>
    
  )
}

export default App
