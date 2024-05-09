import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.slice(0, 4).map((product, index) => (
        <div key={index} className="relative group">
          <div
            className="bg-gray-200 w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${product.category.image})` }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white px-4 py-2 text-gray-800 font-semibold rounded-lg shadow-md">View Details</button>
            </div>
          </div>
          <div className="mt-2 text-center">{product.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
