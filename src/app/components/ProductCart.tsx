import Image from 'next/image';
import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa6";

 interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
 };

 const generateRating = (rating: number) => {
    switch (rating) {
        case 1:
        return (
            <div className='flex gap-1 text-lg text-[#FF9525]'>
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        );
        case 2:
        return (
            <div className='flex gap-1 text-lg text-[#FF9525]'>
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        );
        case 3:
        return (
            <div className='flex gap-1 text-lg text-[#FF9525]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        );
        case 4:
        return (
            <div className='flex gap-1 text-lg text-[#FF9525]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
            </div>
        );
        case 5:
        return (
            <div className='flex gap-1 text-lg text-[#FF9525]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        );
        default: 
        return null;
    }
 };

const ProductCart:React.FC<propsType> = ({img,title,desc,rating,price}) => {
  return (
    <div className='px-4 py-2 border border-gray-200 rounded-xl max-w-[400px]'>
        <div>
            <Image className='w-[250px] h-[200px]' src={img} alt={title} width={200} height={300} />
        </div>
        <div className='space-y-2 py-2'>
            <h2 className='text-[#ff8f9c] font-medium uppercase'>{title}</h2>
            <p className='text-gray-500 max-w-[150px]'>{desc}</p>
            <div>{generateRating(rating)}</div>
        </div>
        <div className='font-bold flex gap-4'>
            ${price}
            <del className='text-gray-500 font-normal'>${parseInt(price) + 50} .00</del>
        </div>
    </div>
  );
};

export default ProductCart;