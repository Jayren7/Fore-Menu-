import React from 'react';

function Sidebar({ categories, activeCategory, onCategoryChange }) {
  return (
    <aside className="w-64 flex-shrink-0 h-screen sticky top-0">
      <div className="flex flex-col justify-center h-full py-8 mt-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(category.category)}
            className={`w-full text-left px-4 py-3 transition ${
              activeCategory === category.category
                ? 'text-green-700 font-bold text-xl'
                : 'text-gray-700 hover:text-green-700 text-lg'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;