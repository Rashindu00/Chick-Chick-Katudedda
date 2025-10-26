import React from 'react';
import { Product } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <Card hover className="cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2">
            <Badge variant="danger" className="text-sm font-bold">
              {product.discount}% OFF
            </Badge>
          </div>
        )}
        {product.isSpecialOffer && (
          <div className="absolute top-2 left-2">
            <Badge variant="warning" className="text-sm font-bold">
              Special Offer
            </Badge>
          </div>
        )}
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
          <Heart size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>

        {product.rating && (
          <div className="flex items-center mb-2">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <div>
            {product.discount ? (
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-600">
                  Rs. {discountedPrice.toFixed(2)} / {product.unit}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  Rs. {product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-primary-600">
                Rs. {product.price.toFixed(2)} / {product.unit}
              </span>
            )}
          </div>
          <Badge variant={product.stock > 0 ? 'success' : 'danger'}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </Badge>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="w-full flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
