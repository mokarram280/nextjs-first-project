import React from 'react';
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const HeaderMain = () => {
  return (
    <section className='border-b border-gray-200 py-6'>
        <div className='container mx-auto sm:flex items-center justify-between px-5 xl:px-0'>
            <div className='text-4xl font-bold text-center pb-4 sm:pb-0 text-black'>
                LOGO
            </div>
            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                <input type="text" placeholder='Enter any product name...' className='border border-gray-200 py-2 px-4 rounded-lg w-full' />
                <CiSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
            </div>
            <div className='hidden lg:flex gap-4 text-gray-500 text-3xl'>
                <CiUser />
            <div className='relative'>
                <CiHeart />
                <span className='bg-red-500 w-4 h-4 rounded-full text-white text-xs absolute right-0 top-0 grid place-items-center translate-x-1 -translate-y-1'>0</span>
            </div>
            <div className='relative'>
                <HiOutlineShoppingBag />
                <span className='bg-red-500 w-4 h-4 rounded-full text-white text-xs absolute right-0 top-0 grid place-items-center translate-x-1 -translate-y-1'>0</span>
            </div>
            </div>
        </div>
    </section>
  );
};

export default HeaderMain;