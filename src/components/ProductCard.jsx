import React from 'react';

function ProductCard({ product, onClick }) {
  const formatPrice = (price) => {
    return price.toLocaleString('id-ID');
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:bg-gray-50 transition py-4 px-3 flex gap-6 items-start"
    >
      {/* GAMBAR BESAR - tanpa rounded dan shadow */}
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-cover flex-shrink-0"
      />

      {/* Info di kanan */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-xl mb-2 text-gray-900">
          {product.name}
        </h3>

        {/* HARGA MERAH */}
        <p className="text-red-600 font-bold text-lg mb-2">
          Rp {formatPrice(product.price)}
        </p>

        <p className="text-gray-500 text-sm leading-relaxed font-normal">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;