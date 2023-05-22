import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
const shopequipment = () => {
  const products = [
    {
      id: 1,
      name: 'RCB Full Kit',
      price: 20,
      image: '/rcbjersey11.jpeg',
    },
    {
        id: 2,
        name: 'KKR Full Kit',
        price: 20,
        image: '/KKRJersey.jpg',
    }
  ];

  return (
    <div className=" bg-black text-white mx-auto w-screen h-screen overflow-y-auto  p-4">
        <div className="pb-8">
            <Header />
        </div>
      <h1 className="text-4xl font-bold mb-6 text-4xl font-bold mb-8 text-center">Buy Cricket Equipment</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black border border-2 border-violet-500 shadow-violet-500 rounded-lg p-4 shadow-md"
          >
            <Image
              width={300}
              height={500}
              src={product.image}
              alt={product.name}
              className="w-full h-40 rounded-md object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-white">Price: ${product.price}</p>
            <button className="bg-black border border-2 border-violet-500 text-white py-2 px-4 mt-4 rounded-md shadow-2xl shadow-violet-500">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default shopequipment;