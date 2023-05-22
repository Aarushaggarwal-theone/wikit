import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';

const shoptickets = () => {
  const products = [
    {
      id: 1,
      name: 'GT vs CSK',
      price: 1500,
      image: 'https://images.news18.com/ibnlive/uploads/2022/05/fsx8fuvauaa1qrd1-16526078723x2.jpg?impolicy=website&width=510&height=356',
      time: '7:30',
      date: 'Today',
      available: 118,
    },
    {
        id: 2,
        name: ' LSG vs MI',
        price: 20,
        image: 'https://www.zoomnews.in/uploads_2019/newses/lsg-vs-mi_1696158523_sm.webp',
        time: '7:30',
        date: '24th May 2023',
        available: 123,
    }
  ];

  return (
    <div className=" bg-black text-white mx-auto w-screen h-screen overflow-y-auto  p-4">
        <div className="pb-8">
            <Header />
        </div>
      <h1 className="text-4xl font-bold mb-6 text-4xl font-bold mb-8 text-center">Buy Tickets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-black border border-2 border-violet-500 shadow-violet-500 rounded-lg p-4 shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-70 rounded-md object-cover mb-4"
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

export default shoptickets;

export default shoptickets;