import React from 'react';
import laptop from '../images/laptop.jpg';

function Cart() {
    return (
        <div className='px-10 py-12 text-[#1d1d1d]'>
            <h1>Home / Cart</h1>

            <h1 className='text-4xl mt-10'>Shopping Cart</h1>

            <section className='mt-8 grid grid-rows-1 border border-[#f0f0f0]'>
                <div className='grid grid-cols-3 border-b border-[#f0f0f0] py-4 px-6'>
                    <h1>Product</h1>
                    <h1>Quantity</h1>
                    <h1>Total</h1>
                </div>
                <div className='grid grid-cols-3 py-4 px-6'>
                    <div className=''>
                        <img src={laptop} alt="laptop" className='w-[30%] border border-[#f0f0f0] rounded-md p-1' />
                        <div>
                            <p>$400</p>
                            <p>The best laptop!</p>
                        </div>
                    </div>
                    <div></div>
                    <h1></h1>
                </div>
            </section>
        </div>
    );
}

export default Cart;