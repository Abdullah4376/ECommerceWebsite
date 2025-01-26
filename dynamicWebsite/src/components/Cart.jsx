import React, { useState } from 'react';
import laptop from '../images/laptop.jpg';

function Cart() {
    const [count, setCount] = useState(1);
    return (
        <div className='px-10 py-12 text-[#1d1d1d]'>
            <h1>Home / Cart</h1>

            <h1 className='text-4xl mt-10'>Shopping Cart</h1>

            <section className='mt-8 flex items-start gap-14'>
                <div className='w-3/4 grid grid-rows-1 border border-[#acacac] rounded-xl'>
                    <div className='grid grid-cols-3 bg-[#f2f2f2] rounded-t-xl border-b border-[#acacac] py-4 px-6'>
                        <h1>Product</h1>
                        <h1>Quantity</h1>
                        <h1>Total</h1>
                    </div>
                    <div className='grid grid-cols-3 py-6 px-6'>
                        <div className='flex items-center gap-5'>
                            <img src={laptop} alt="laptop" className='w-[30%] border border-[#acacac] rounded-md p-1' />
                            <div>
                                <p className='text-lg'>$400</p>
                                <p className='text-xl font-medium'>The best laptop!</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <button 
                                className='border border-[#acacac] px-2 rounded-full'
                                onClick={() => count > 1 ? setCount(count - 1) : count}
                            >-</button>
                            <span className='w-2'>{count}</span>
                            <button 
                                className='border border-[#acacac] px-[6px] rounded-full'
                                onClick={() => setCount(count + 1)}
                            >+</button>
                        </div>
                        <h1 className='flex items-center text-xl'>
                            $400
                        </h1>
                    </div>
                </div>

                <div className='w-1/4 border border-[#acacac] rounded-xl p-6'>
                    <h1 className='text-2xl'>Cart Totals</h1>
                    <div className='grid grid-cols-2 mt-4'>
                        <h1>Subtotal</h1>
                        <h1>$400</h1>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <h1>Shipping</h1>
                        <h1>Free</h1>
                    </div>
                    <div className='grid grid-cols-2 mt-4'>
                        <h1>Total</h1>
                        <h1>$400</h1>
                    </div>
                    <p className='mt-4 font-light text-sm text-[#737373]'>Taxes and shipping calculated at checkout</p>
                    <button className='mt-4 w-full border border-[#1d1d1d] text-[#1d1d1d] hover:bg-[#1d1d1d] duration-300 px-full py-3 hover:text-white font-medium rounded-full'>Checkout</button> 
                </div>
            </section>
        </div>
    );
}

export default Cart;