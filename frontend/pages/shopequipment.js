import Header from '@/components/Header';
import React from 'react';
import Link from 'next/link';

const shopequipment = () => {
  const products = [
    {
      id: 1,
      name: 'GM Bat',
      price: 3400,
      image: 'https://m.media-amazon.com/images/I/417Wbg68KFL._SX679_.jpg',
    },
    {
        id: 2,
        name: 'GM Cricket Ball',
        price: 1300,
        image: 'https://m.media-amazon.com/images/I/41JwzToPu-L.jpg',
    },
    {
        id: 3,
        name: 'GM, Helmet',
        price: 2400,
        image: 'https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/1280x1280/products/3264/6956/Shrey_Classic_Steel_Cricket_Helmet_Mens_and_Boys_Size_cricketershop_1__12348.1599509475.jpg?c=1',
    },
    {
        id: 4,
        name: 'GM Water Bottle',
        price: 500,
        image: 'https://5.imimg.com/data5/FH/SA/RX/SELLER-9031732/gm-410-ultra-single-wall-cola-bottle-1000x1000.jpg',
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
            <img
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

export default shopequipment;
