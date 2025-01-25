import React from 'react';

function Footer() {
    return (
        <footer className='grid grid-cols-4 py-16 px-8 gap-12 text-black'>
            <div>
                <h1 className='font-medium mb-4'>E-Coma</h1>
                <p className='text-sm'>E-Coma brings you premium makeup and beauty products, blending timeless elegance with modern trends. Elevate your style with our quality and innovation. <br />
                Available in Lahore, Islamabad, and Rawalpindi.</p>
            </div>

            <div>
                <h1 className='font-medium mb-4'>Quicklinks</h1>
                <ul>
                    <li className='cursor-pointer hover:underline mb-1 w-fit'>HOME</li>
                    <li className='cursor-pointer hover:underline mb-1 w-fit'>SHOP</li>
                    <li className='cursor-pointer hover:underline mb-1 w-fit'>PRODUCTS</li>
                    <li className='cursor-pointer hover:underline mb-1 w-fit'>ABOUT</li>
                    <li className='cursor-pointer hover:underline w-fit'>CONTACT</li>
                </ul>
            </div>
                
            <div>
                <h1 className='font-medium mb-4'>Information</h1>
                <ul>
                    <li className='mb-1 hover:underline cursor-pointer'>Privacy Policy</li>
                    <li className='mb-1 hover:underline cursor-pointer'>Terms & Conditions</li>
                    <li className='hover:underline cursor-pointer'>FAQ's</li>
                </ul>
            </div>
                
            <div>
                <h1 className='font-medium mb-4'>Our Address</h1>
                <p>
                    C-1, Main Boulevard, Green Forts 2, Canal Road Lahore. Pakistan <br /> <span className='font-medium'>0300-1234567</span>
                </p>

            </div>
        </footer>
    );
}

export default Footer;