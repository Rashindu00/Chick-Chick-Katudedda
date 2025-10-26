import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Shield, Truck, Heart, Award, Users, Clock } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Chick Chick Katudedda</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for premium quality meat and poultry products since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Chick Chick Katudedda started with a simple mission: to provide fresh, 
              high-quality meat and poultry products to families across Sri Lanka. What began as a small 
              local butcher shop has grown into one of the most trusted names in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that everyone deserves access to fresh, quality meat products at fair prices. 
              That's why we work directly with local farmers and suppliers to ensure the highest standards 
              of quality and freshness.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we serve thousands of happy customers and continue to expand our product range while 
              maintaining the same commitment to quality that we started with.
            </p>
            <Button onClick={() => navigate('/products')} size="lg">
              Browse Our Products
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500"
              alt="Fresh meat"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=500"
              alt="Quality poultry"
              className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500"
              alt="Butcher shop"
              className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
              alt="Food preparation"
              className="rounded-lg shadow-lg h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We maintain the highest quality standards and hygiene practices. Every product is 
                carefully inspected to ensure freshness and quality.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-fresh-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-fresh-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're committed to providing excellent customer 
                service and building long-lasting relationships.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Same-day delivery for orders placed before 12 PM. We ensure your products reach you 
                fresh and on time, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
              <Award className="text-primary-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest cuts from trusted suppliers who meet our strict quality standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-fresh-100 p-3 rounded-lg flex-shrink-0">
              <Clock className="text-fresh-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">
                All products are delivered fresh daily. We never compromise on freshness.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <Users className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Expert Butchers</h3>
              <p className="text-gray-600">
                Our experienced team ensures perfect cuts and professional service.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
              <Shield className="text-yellow-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Hygiene Standards</h3>
              <p className="text-gray-600">
                Certified facilities maintaining international hygiene and safety standards.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
              <Truck className="text-purple-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">
                Enjoy free delivery on orders above Rs. 5,000 across Colombo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-pink-100 p-3 rounded-lg flex-shrink-0">
              <Heart className="text-pink-600" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Competitive prices without compromising on quality. Great value for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-primary-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-primary-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-primary-100">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-100">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Chick Chick Katudedda, we're more than just a meat shop. We're your trusted partner 
            in providing nutritious, high-quality protein for your family. Every product we offer 
            meets our rigorous quality standards, and we're committed to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">✅ Sourcing Responsibly</h3>
              <p className="text-gray-600">
                Working with ethical suppliers who prioritize animal welfare and sustainable practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">✅ Ensuring Freshness</h3>
              <p className="text-gray-600">
                Maintaining cold chain integrity from farm to your table for maximum freshness.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">✅ Supporting Local</h3>
              <p className="text-gray-600">
                Partnering with local farmers and suppliers to support the community.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">✅ Customer Satisfaction</h3>
              <p className="text-gray-600">
                Providing excellent service and standing behind every product we sell.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their daily meat and poultry needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => navigate('/products')} size="lg">
              Shop Now
            </Button>
            <Button onClick={() => navigate('/contact')} variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
