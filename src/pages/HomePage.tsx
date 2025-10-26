import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductList } from '../components/products/ProductList';
import { getFeaturedProducts, getSpecialOffers, getGroceryProducts } from '../data/products';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const specialOffers = getSpecialOffers().slice(0, 4);
  const groceryProducts = getGroceryProducts().slice(0, 4);

 return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text and Buttons */}
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Fresh Quality Meat & Poultry
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Premium quality chicken, beef, fish, and more delivered fresh to your doorstep
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/products')} size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Shop Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button onClick={() => navigate('/special-offers')} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Offers
                </Button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex justify-center ">
              <img 
                src="https://www.shutterstock.com/image-vector/cartoon-chickenmascot-logo-illustration-600nw-2494360959.jpg" 
                alt="Fresh Meat & Poultry"
                style={{width:'8000px', height:'300px'}} 
                className="w-64 max-w-xs rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-fresh-100 p-3 rounded-lg">
                <Truck className="text-fresh-600" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Free Delivery</h3>
                <p className="text-gray-600">On orders above Rs. 5,000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-fresh-100 p-3 rounded-lg">
                <Shield className="text-fresh-600" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Quality Guaranteed</h3>
                <p className="text-gray-600">100% fresh and hygienic products</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-fresh-100 p-3 rounded-lg">
                <Clock className="text-fresh-600" size={32} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Same Day Delivery</h3>
                <p className="text-gray-600">Order before 12 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      {specialOffers.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Special Offers</h2>
              <Button onClick={() => navigate('/special-offers')} variant="outline">
                View All
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <ProductList products={specialOffers} />
          </div>
        </section>
      )}

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <Button onClick={() => navigate('/products')} variant="outline">
              View All
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
          <ProductList products={featuredProducts} />
        </div>
      </section>

      {/* Grocery Section */}
      {groceryProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Grocery Items</h2>
                <p className="text-gray-600 mt-2">Rice, Sugar, Lentils, Oils, Soaps & More</p>
              </div>
              <Button onClick={() => navigate('/grocery')} className="bg-fresh-600 hover:bg-fresh-700">
                View All Grocery
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
            <ProductList products={groceryProducts} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order Fresh Meat & Groceries?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Browse our wide selection of premium quality products
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => navigate('/products')} size="lg" className="bg-fresh-600 hover:bg-fresh-700 text-white">
              Shop Meat & Poultry
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button onClick={() => navigate('/grocery')} size="lg" className="bg-fresh-600 hover:bg-fresh-700 text-white">
              Shop Grocery
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
