import React, { useState, useMemo } from 'react';
import { Category } from '../types';
import { ProductList } from '../components/products/ProductList';
import { Input } from '../components/ui/Input';
import { getGroceryProducts } from '../data/products';
import { Search, ShoppingBasket } from 'lucide-react';

export const GroceryPage: React.FC = () => {
  const groceryProducts = getGroceryProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');

  // Define grocery subcategories
  const subCategories = [
    'All',
    'Rice & Grains',
    'Sugar & Sweeteners',
    'Lentils & Pulses',
    'Oils',
    'Cleaning Products',
    'Beverages',
    'Dairy',
    'Other',
  ];

  const filteredProducts = useMemo(() => {
    return groceryProducts.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Price filter
      const matchesPrice = product.price >= priceRange.min && 
                          (priceRange.max === 0 || product.price <= priceRange.max);

      // Stock filter
      const matchesStock = !inStockOnly || product.stock > 0;

      // Subcategory filter
      let matchesSubCategory = true;
      if (selectedSubCategory !== 'All') {
        const productName = product.name.toLowerCase();
        switch (selectedSubCategory) {
          case 'Rice & Grains':
            matchesSubCategory = productName.includes('rice') || productName.includes('flour');
            break;
          case 'Sugar & Sweeteners':
            matchesSubCategory = productName.includes('sugar');
            break;
          case 'Lentils & Pulses':
            matchesSubCategory = productName.includes('lentil') || productName.includes('dhal') || productName.includes('parippu');
            break;
          case 'Oils':
            matchesSubCategory = productName.includes('oil');
            break;
          case 'Cleaning Products':
            matchesSubCategory = productName.includes('soap') || productName.includes('liquid') || productName.includes('washing');
            break;
          case 'Beverages':
            matchesSubCategory = productName.includes('tea') || productName.includes('coffee');
            break;
          case 'Dairy':
            matchesSubCategory = productName.includes('milk');
            break;
          case 'Other':
            matchesSubCategory = productName.includes('salt');
            break;
        }
      }

      return matchesSearch && matchesPrice && matchesStock && matchesSubCategory;
    });
  }, [groceryProducts, searchQuery, priceRange, inStockOnly, selectedSubCategory]);

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-fresh-600 to-fresh-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBasket size={48} />
            <h1 className="text-5xl font-bold">Grocery Items</h1>
          </div>
          <p className="text-xl text-fresh-100 max-w-3xl mx-auto">
            Essential grocery items for your daily needs - Rice, Sugar, Lentils, Oils, Soaps & More
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

              {/* Search */}
              <div className="mb-4 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search grocery items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-500"
                />
              </div>

              {/* Subcategories */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <div className="flex flex-col gap-2">
                  {subCategories.map((subCat) => (
                    <button
                      key={subCat}
                      onClick={() => setSelectedSubCategory(subCat)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors text-left ${
                        selectedSubCategory === subCat
                          ? 'bg-fresh-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {subCat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (Rs.)</label>
                <div className="flex gap-2 mb-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                  />
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  />
                </div>
              </div>

              {/* Stock Filter */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="inStock"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 text-fresh-600 border-gray-300 rounded focus:ring-fresh-500"
                />
                <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
                  Show only in-stock items
                </label>
              </div>

              {/* Info Card */}
              <div className="mt-6 p-4 bg-fresh-50 rounded-lg">
                <h3 className="font-semibold text-fresh-800 mb-2">💚 Free Delivery</h3>
                <p className="text-sm text-fresh-700">
                  On grocery orders above Rs. 2,000
                </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </div>
              {selectedSubCategory !== 'All' && (
                <button
                  onClick={() => setSelectedSubCategory('All')}
                  className="text-sm text-fresh-600 hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Buy Groceries From Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm">
                Only branded and high-quality grocery items
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600 text-sm">
                Competitive prices on all grocery items
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Same Day Delivery</h3>
              <p className="text-gray-600 text-sm">
                Order before 12 PM for same-day delivery
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
