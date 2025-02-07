import React from 'react';
import Image from 'next/image';

interface propsType {
    img: string;
    title: string;
    mainTitles: string;
    price: string;
}

const Slide:React.FC<propsType> = ({img,title,mainTitles,price}) => {
  return (
    <div className='outline-none border-none relative'>
        <div className='absolute left-[30px] md:left-[70px] top-[50%] max-w-[250px] sm:max-w-[350px] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent rounded-lg p-4 sm:p-0 sm:rounded-none'>
            <h3 className='text-2xl lg:text-3xl text-[#ff8f9c]'>{title}</h3>
            <h2 className='text-[26px] md:text-[30px] lg:text-[44px] font-bold laeading-[1.2]'>{mainTitles}</h2>
            <h3 className='text-[24px] text-white'>
                Starting at
                <b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>
                .00
            </h3>
            <div className='bg-[#ff8f9c] text-white font-bold text-sm md:text-[16px] px-4 py-2 rounded-lg inline-block cursor-pointer hover:bg-black'>Shop Now</div>
        </div>
        <Image className='w-full h-[300px] md:h-[600px] rounded-xl object-cover object-right md:object-left-bottom'
        src={img}
        alt="banner"
        width={2000}
        height={1000}
        />
    </div>
  );
};

export default Slide;