import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className='container py-16 mx-auto px-4 grid-cols-2'>
        <h2 className='text-2xl font-semibold pb-4'>Testimonials</h2>
        <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
            <div className='border border-gray-400 rounded-2xl grid place-items-center p-6 lg:p-0'>
                <div className='flex flex-col items-center gap-1 text-center'>
                    <Image
                    className='rounded-full inline-block'
                    src='/man.avif'
                    alt='dp'
                    width={80}
                    height={80}
                    />
                  <h2 className='text-gray-500 font-semibold text-[20px]'>Jhon Doe</h2>
                  <p className='font-semibold text-gray-700'>SEO & Founder Invision</p>
                  <div className='py-2 text-[#ff8f9c]'><FaQuoteLeft size={30} /></div>
                  <p className='max-w-[200px] text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure deserunt minus sed dolor.
                  </p>
                </div>
                </div>
                <div className='bg-red-500 bg-[url(/shopping.jpg)] bg-cover w-full h-[500px] rounded-2xl grid place-items-center'>
                    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 px-2 sm:px-8 grid place-items-center gap-3'>
                       <button className='bg-black text-white p-2 rounded-md'>25% DISCOUNT</button>
                       <h2 className='font-extrabold text-2xl text-[#272727]'>Summer Collection</h2>
                       <p className='text-[#ff8f9c] text-[20px]'>
                        Strating @ $ 20 <b>Shop Now</b>
                       </p>
                    </div>
                </div>
        </div>
    </section>
  );
};

export default Testimonial;