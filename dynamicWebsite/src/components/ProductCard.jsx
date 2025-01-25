import React from 'react';

function ProductCard({imgSrc, title}) {
    return (
        <div className="max-w-72 rounded overflow-hidden shadow-lg border group cursor-pointer">
            <div className='overflow-hidden'>
                <img className="w-full group-hover:scale-110 duration-300" src={imgSrc} alt="Sunset in the mountains" />
            </div>
            <h1 className='px-6 py-4 text-center font-medium duration-200 relative'>
                {title}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>    
            </h1>
        </div>
    );
}

export default ProductCard;