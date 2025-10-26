import React from 'react';
import { ProductList } from '../components/products/ProductList';
import { getSpecialOffers } from '../data/products';

export const SpecialOffersPage: React.FC = () => {
  const specialOffers = getSpecialOffers();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Special Offers</h1>
        <p className="text-gray-600">
          Check out our amazing deals and discounts on premium quality products
        </p>
      </div>

      {specialOffers.length > 0 ? (
        <ProductList products={specialOffers} />
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No special offers available at the moment</p>
        </div>
      )}
    </div>
  );
};
