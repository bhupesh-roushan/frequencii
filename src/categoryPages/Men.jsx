import React from 'react';
import men from '../categoryData/Men.json'; // Assuming the file is inside a data folder

function Men() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {men.map(product => (
          <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500 mb-2">${product.price}</p>
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
