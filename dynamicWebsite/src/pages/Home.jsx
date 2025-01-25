import React from 'react';
import Slideshow from '../components/Slideshow';
import ProductCard from '../components/productCard';
import AdvancedProductCards from '../components/AdvancedProductCards';
import {
  headphone,
  keyboard,
  laptop,
  mic,
  lipstick
} from '../images/index'
import { useState } from 'react';

function Home() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <Slideshow />
            <section className='px-8 py-4'>
                <h1 className='text-2xl font-medium'>Shop By Category</h1>

                <div className='flex items-center gap-6 mt-8'>
                <ProductCard imgSrc={headphone} title='Headphones' />
                <ProductCard imgSrc={keyboard} title='Keyboards and Mice' />
                <ProductCard imgSrc={laptop} title='Laptops' />
                <ProductCard imgSrc={mic} title='Microphones' />
                </div>

            </section>

            <section className='px-8 py-4 mt-10 text-2xl mb-10'>
                <h1>Best Sellers</h1>
                <div className='flex items-center justify-between mt-3'>
                <p className='font-extralight'>Take the Best!</p>
                <span className='font-light cursor-pointer group relative'>View All Products!
                    <span className='absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full'></span>
                </span>
                </div>
                
                {/* Advanced Product Cards */}
                <div className='flex gap-7 mt-7'>
                <AdvancedProductCards imgSrc={keyboard} price={50} stars={8} title={'Best keyboard!'} />
                <AdvancedProductCards imgSrc={laptop} price={300} stars={6} title={'Best laptop!'} />
                <AdvancedProductCards imgSrc={mic} price={100} stars={4} title={'Best mic!'} />
                <AdvancedProductCards imgSrc={headphone} price={50} stars={9} title={'Best headphone!'} />
                </div>

                {/* Single Product Showcase */}
                <section className='flex gap-7 items-start mt-24'>
                {/* Image Div */}
                <div className='w-[150%]'>
                    <img src={lipstick} alt="Laptop" className='w-full' loading='lazy' />
                </div>

                {/* Image Details Div */}
                <div>
                    <h5 className='text-2xl font-medium'>$400</h5>
                    <h1 className='mt-5 text-4xl'>Soft Pink Matte Lipstick & Blush Duo</h1>
                    <p className='mt-3 text-lg'>Achieve a radiant look with this lipstick and blush duo. The creamy lipstick adds a soft pink touch, while the blush gives a natural rosy glow. Compact with a mirror, it's perfect for touch-ups anytime!</p>
                    <h1 className='text-4xl mt-8 mb-3'>$400</h1>
                    <hr className='border-[#c2bcbc] border' />

                    <section className='flex items-center gap-3 mt-5 select-none'>
                    <div className='flex items-center'>
                        <button 
                        className='w-14 h-14 rounded-full border border-[#1d1d1d] text-5xl flex items-center justify-center'
                        onClick={() => count > 1 ? setCount(count - 1) : count}
                        >-</button>
                        
                        <div className='w-10 ml-3 mr-3 text-center'>
                        <span>{count}</span>
                        </div>

                        <button 
                        className='w-14 h-14 rounded-full border border-[#1d1d1d] text-4xl flex items-center justify-center'
                        onClick={() => setCount(count + 1)}
                        >+</button>
                    </div>

                    <button 
                        className='border border-[#1d1d1d] hover:bg-[#303030] bg-[#1d1d1d] text-white duration-300 font-normal outline-none px-12 py-4 rounded-full text-xl'
                    >
                        Add to Cart
                    </button>

                    <button 
                        className='border border-[#1d1d1d] hover:bg-[#303030] hover:text-white duration-300 text-[#1d1d1d] font-normal outline-none px-12 py-4 rounded-full text-xl'
                    >
                        Buy Now
                    </button>
                    </section>

                </div>
                </section>
            </section>

            <hr />
        </div>
    );
}

export default Home;