import Header from '@/components/Header';
import React from 'react';

const shop = () => {
  const products = [
    {
      id: 1,
      name: 'RCB TSHIRT',
      price: 20,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/rcbjersey11.jpeg',
    },
    {
        id: 2,
        name: 'KKR TSHIRT',
        price: 20,
        image: 'https://www.insidesport.in/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-22-at-3.36.39-PM.jpeg?w=690',
      },
      {
        id: 3,
        name: 'MI TSHIRT',
        price: 20,
        image: 'https://www.insidesport.in/wp-content/uploads/2021/02/IPL-2021-MI.jpg',
      },
      {
        id: 4,
        name: 'CSK TSHIRT',
        price: 20,
        image: 'https://img.jagranjosh.com/images/2022/March/2632022/CSK_player_list_2022_stats_past_records.jpg',
      },
      {
        id: 5,
        name: 'GT TSHIRT',
        price: 20,
        image: 'https://gumlet.assettype.com/bloombergquint/2023-03/d613d69c-f171-43e1-9cf2-b816622ebf48/Gujarat_Titans.jfif',
      },
      {
        id: 6,
        name: 'LSG TSHIRT',
        price: 20,
        image: 'https://img.jagranjosh.com/images/2023/March/3132023/IPL-2023-list-LSG.jpg',
      },
      {
        id: 7,
        name: 'SRH TSHIRT',
        price: 20,
        image: 'https://www.insidesport.in/wp-content/uploads/2021/03/IPL-SRH.jpg',
      },
      {
        id: 8,
        name: 'DC TSHIRT',
        price: 20,
        image: 'https://english.cdn.zeenews.com/sites/default/files/2022/02/15/1014773-capitalsquadipl.jpg',
      },
      {
        id: 9,
        name: 'PBKS TSHIRT',
        price: 20,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadHocuvauX1k7kumxtCuDxf-HMQNJpuoLHKC64ig-5nfS7lFSkvK476iAqg602OxVG_Y&usqp=CAU',
      },
      {
        id: 10,
        name: 'RR TSHIRT',
        price: 20,
        image: 'https://img.jagranjosh.com/images/2022/March/2932022/Rajasthan_royals.jpg',
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
            <img
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

export default shop;
