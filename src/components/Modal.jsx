import React, { useEffect } from 'react';

function Modal({ product, onClose }) {
  // Tutup modal dengan tombol ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  const formatPrice = (price) => {
    return price.toLocaleString('id-ID');
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-2xl font-bold shadow-md"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
          <p className="text-red-600 font-bold text-xl mb-3">
            Rp {formatPrice(product.price)}
          </p>
          <p className="text-gray-500 mb-6 font-normal leading-relaxed">{product.description}</p>
          
          <button 
            onClick={onClose}
            className="w-full bg-green-700 text-white py-3 rounded font-semibold hover:bg-green-800 transition"
          >
            Pesan di App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;