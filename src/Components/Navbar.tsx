import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <section className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto py-4 font-medium text-black'>
                <Link href='#' className='navbar__link relative'>
                HOME
                </Link>
                <Link href='#' className='navbar__link relative'>
                CATEGORIS
                </Link>
                <Link href='#' className='navbar__link relative'>
                MEN'S
                </Link>
                <Link href='#' className='navbar__link relative'>
                WOMEN'S
                </Link>
                <Link href='#' className='navbar__link relative'>
                JEWELRY
                </Link>
                <Link href='#' className='navbar__link relative'>
                PERFUME
                </Link>
                <Link href='#' className='navbar__link relative'>
                BLOG
                </Link>
                <Link href='#' className='navbar__link relative'>
                HOT OFFERS
                </Link>
            </div>
        </div>
    </section>
  );
};

export default Navbar;