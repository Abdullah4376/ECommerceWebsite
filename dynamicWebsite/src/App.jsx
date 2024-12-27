import { useNavigate } from 'react-router'
import './App.css'
import Logo from './components/Logo.jsx'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    {/* Navbar Starts Here */}
      <header className='font-poppins bg-slate-900 text-white sticky top-0 z-50 mx-auto flex w-full items-center justify-between p-8'>
        <div className='flex items-center space-x-2'>
          <Logo />
          <p className='text-3xl font-medium'>E-Coma</p>
        </div>
        
        <ul className='flex justify-between items-center space-x-8'>
          <li className='text-2xl'>Home</li>
          <li className='text-2xl'>Login</li>
          <li className='text-2xl'>Signup</li>
        </ul>

        <button onClick={() => navigate('/cart')} className='material-symbols-outlined' style={{ fontSize: '35px' }}>shopping_cart</button>
        
      </header>
      {/* Navbar Ends Here */}
    </>
  )
}

export default App
