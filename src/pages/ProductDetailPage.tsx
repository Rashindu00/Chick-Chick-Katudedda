import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, Heart, Star, Minus, Plus } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        onClick={() => navigate('/products')}
        variant="outline"
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <div className="relative mb-4">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            {product.discount && (
              <div className="absolute top-4 right-4">
                <Badge variant="danger" className="text-lg font-bold px-3 py-1">
                  {product.discount}% OFF
                </Badge>
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    selectedImage === index ? 'border-primary-600' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <Badge variant={product.stock > 0 ? 'success' : 'danger'}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </Badge>
            {product.rating && (
              <div className="flex items-center">
                <Star size={20} className="text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-1 text-gray-600">({product.reviews?.length || 0} reviews)</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            {product.discount ? (
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary-600">
                    Rs. {discountedPrice.toFixed(2)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    Rs. {product.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">per {product.unit}</p>
              </div>
            ) : (
              <div>
                <span className="text-3xl font-bold text-primary-600">
                  Rs. {product.price.toFixed(2)}
                </span>
                <span className="text-gray-600 ml-2">/ {product.unit}</span>
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="p-2 hover:bg-gray-200 rounded transition-colors"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={20} />
                </button>
              </div>
              <span className="text-gray-600">
                (Max: {product.stock} {product.unit}s available)
              </span>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 flex items-center justify-center gap-2"
              size="lg"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="px-4">
              <Heart size={20} />
            </Button>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Product Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Category: {product.category}</li>
              <li>• Unit: {product.unit}</li>
              <li>• Stock: {product.stock} available</li>
              {product.isSpecialOffer && <li>• ⭐ Special Offer</li>}
              {product.isFeatured && <li>• ⭐ Featured Product</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
