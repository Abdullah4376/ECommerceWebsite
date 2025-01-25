import { useState } from 'react';
import React from 'react';
import {
  codeSlideshow,
  gigabyteSlideshow, 
  laptopSlideshow, 
  laptopStandingSlideshow, 
  laptopTableSlideshow
} from '../images/index'

function Slideshow() {
    const slides = [
        {
          src: codeSlideshow,
        },
        {
          src: gigabyteSlideshow,
        },
        {
          src: laptopSlideshow,
        },
    
        {
          src: laptopStandingSlideshow,
        },
        {
          src: laptopTableSlideshow,
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    
    return(
        <section className='max-w-[1400px] h-[780px] w-full m-auto py-12 px-8 relative group'>
        <img src={slides[currentIndex].src} className='w-full h-full rounded-2xl bg-center bg-cover duration-500' />

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <span className='material-symbols-outlined' onClick={prevSlide}>chevron_left</span>
        </div>

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <span className='material-symbols-outlined' onClick={nextSlide}>chevron_right</span>
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <span className='material-symbols-outlined slider-dot'>fiber_manual_record</span>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Slideshow;