import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const shopmerch = () => {
  const products = [
    {
      id: 1,
      name: 'RCB TSHIRT',
      price: 20,
      image: '/RCBJersey.jpeg',
    },
    {
        id: 2,
        name: 'KKR TSHIRT',
        price: 20,
        image: '/KKRJersey.jpg',
      },
      {
        id: 3,
        name: 'MI TSHIRT',
        price: 20,
        image: '/MIJersey.jpg',
      },
      {
        id: 4,
        name: 'CSK TSHIRT',
        price: 20,
        image: '/CSKJersey.jpg',
      },
      {
        id: 5,
        name: 'GT TSHIRT',
        price: 20,
        image: '/GTJersey.jpg',
      },
      {
        id: 6,
        name: 'LSG TSHIRT',
        price: 20,
        image: '/LSGJersey.jpg',
      },
      {
        id: 7,
        name: 'SRH TSHIRT',
        price: 20,
        image: '/SRHJersey.jpg',
      },
      {
        id: 8,
        name: 'DC TSHIRT',
        price: 20,
        image: '/DCJersey.jpg',
      },
      {
        id: 9,
        name: 'PBKS TSHIRT',
        price: 20,
        image: '/PBKSJersey.jpg',
      },
      {
        id: 10,
        name: 'RR TSHIRT',
        price: 20,
        image: '/RRJersey.jpg',
      },
  ];

  return (
    <div className=" bg-black text-white mx-auto w-screen h-screen overflow-y-auto  p-4">
        <div className="pb-8">
            <Header />
        </div>
      <h1 className="text-4xl font-bold mb-6 text-4xl font-bold mb-8 text-center">Shop Merchendise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black border border-2 border-violet-500 shadow-violet-500 rounded-lg p-4 shadow-md"
          >
            <Image
            height={300}
            width={500}
              src={product.image}
              alt={product.name}
              className="w-full h-40 rounded-md object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-white">Price: Rs. {product.price}</p>
            <button href="#" className="bg-black border border-2 border-violet-500 text-white py-2 px-4 mt-4 rounded-md shadow-2xl shadow-violet-500">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default shopmerch;

