import React from 'react';
import { starsImg } from '../images/index';

function AdvancedProductCards({imgSrc, title, price, stars}) {
    return (
        <div className="bg-[#ebe6e6] max-w-72 rounded overflow-hidden shadow-lg border group cursor-pointer">
            <div className='overflow-hidden'>
                <img className="w-full group-hover:scale-110 duration-300" src={imgSrc} alt="Sunset in the mountains" />
            </div>
            <h1 className='py-4 font-medium duration-200 relative'>
                <span className='px-3 text-xl font-normal'>${price}.00</span>
                
                <br />
                <span className='mt-5 text-xl px-3'>{title}</span> 
                
                <br />
                <div className='w-full flex items-center'>
                    <img src={starsImg} className='w-2/5' />    
                    <span className='text-lg font-normal text-slate-800'>({stars})</span>
                </div>
                
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>    
                <br />

                <div className='text-center w-full mt-[-30px]'>
                    <button className='border border-gray-900 hover:bg-gray-900 hover:text-white duration-300 text-gray-900 font-normal outline-none px-[25%] py-2 rounded-3xl text-xl'>Buy Now</button>
                </div>
            </h1>

        </div>
    );
}

export default AdvancedProductCards;