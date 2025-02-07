import React from 'react';
import ProductCart from './ProductCart';

const productsData = [
  {
    img:'/jacket.jpeg',
    title: 'Jacket',
    desc:'MEN Yarn Fleece Full Zip Jacket',
    rating: 4,
    price:'45.00',
  },
  {
    img:'/skirt.png',
    title: 'Skirt',
    desc:'Black Floral Warp Mini Skirt',
    rating: 5,
    price:'55.00',
  },
  {
    img:'/hill_shoes.jpg',
    title: 'Party Wear',
    desc:'Women Party Wear Shoes',
    rating: 3,
    price:'25.00',
  },
  {
    img:'/shirt.avif',
    title: 'Shirt',
    desc:'Pure Grement Dyed Cotton Shirt',
    rating: 4,
    price:'45.00',
  },
  {
    img:'/sports_shose.jpg',
    title: 'Sports',
    desc:'Trekking & Running Shoes - Black',
    rating: 3,
    price:'58.00',
  },
  {
    img:'/smart_watch.avif',
    title: 'Watches',
    desc:'Smart Watches Vital Plus',
    rating: 5,
    price:'100.00',
  },
  {
    img:'/classic-alarm-clock.avif',
    title: 'Watches',
    desc:'Pocket Watch Leather Pouch',
    rating: 4,
    price:'120.00',
  },
];

const NewProducts = () => {
  return (
    <div>
        <div className='container py-16 mx-auto px-4'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className='grid grid-cols-1 place-items-center sm:plase-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-x-10 xl:gap-y-10'>
              {productsData.map((product, index) =>(
                <ProductCart
                key={index}
                img={product.img}
                title={product.title}
                desc={product.desc}
                rating={product.rating}
                price={product.price}
                 />
              ))}
            </div>
        </div>
    </div>
  );
};

export default NewProducts;