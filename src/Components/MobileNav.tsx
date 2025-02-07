import React from 'react';
import { IoMenu, IoHomeOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { CiHeart } from 'react-icons/ci';
import { GrAppsRounded } from "react-icons/gr";

const MobileNav = () => {
  return (
    <div className='lg:hidden fixed bottom-0 w-[80%] text-black left-[50%] -translate-x-[50%] bg-white'>
        <div className='flex justify-between text-[28px] py-2 px-4'>
            <IoMenu />
        <div className='relative'>
            <HiOutlineShoppingBag />
            <span className='bg-red-500 w-4 h-4 rounded-full text-white text-xs absolute right-0 top-0 grid place-items-center translate-x-1 -translate-y-1'>0</span>
        </div>
        <IoHomeOutline />
        <div className='relative'>
              <CiHeart />
              <span className='bg-red-500 w-4 h-4 rounded-full text-white text-xs absolute right-0 top-0 grid place-items-center translate-x-1 -translate-y-1'>0</span>
        </div>
        <GrAppsRounded />
        </div>
    </div>
  );
};

export default MobileNav;