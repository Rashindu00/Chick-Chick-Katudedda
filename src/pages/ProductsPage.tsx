import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import { ProductList } from '../components/products/ProductList';
import { ProductFilter } from '../components/products/ProductFilter';
import { sampleProducts } from '../data/products';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      // Price filter
      const matchesPrice = product.price >= priceRange.min && 
                          (priceRange.max === 0 || product.price <= priceRange.max);

      // Stock filter
      const matchesStock = !inStockOnly || product.stock > 0;

      return matchesSearch && matchesCategory && matchesPrice && matchesStock;
    });
  }, [searchQuery, selectedCategory, priceRange, inStockOnly]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters - Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
          />
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <div className="mb-4 text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};
