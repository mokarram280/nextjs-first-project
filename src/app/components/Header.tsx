import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <section className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='hidden lg:flex gap-1'>
          <div className='btn'>
            <FaFacebookF />
          </div>
          <div className='btn'>
            <FaTwitter />
          </div>
          <div className='btn'>
            <FaInstagram />
          </div>
          <div className='btn'>
            <FaLinkedin />
          </div>
          </div>
          <div className='text-xs text-gray-500'>
            <b>FREE SHOPPING</b> THIS WEEK ORDER OVER $55
          </div>
          <div className='flex gap-4'>
            <select name='currency' id='currency' className='text-xs text-gray-500 w-[70px]'>
              <option value="USD $">USD $</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
            </select>
            <select name='language' id='language' className='text-xs text-gray-500 w-[70px]'>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Header;