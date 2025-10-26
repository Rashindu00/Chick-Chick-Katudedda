import React from 'react';
import { CartItem as CartItemType } from '../../types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const itemTotal = discountedPrice * quantity;

  return (
    <div className="flex gap-4 py-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>

        <div className="mt-2 flex items-center gap-2">
          {product.discount ? (
            <>
              <span className="font-bold text-primary-600">
                Rs. {discountedPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                Rs. {product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="font-bold text-primary-600">
              Rs. {product.price.toFixed(2)}
            </span>
          )}
          <span className="text-sm text-gray-600">/ {product.unit}</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-1 hover:bg-gray-200 rounded transition-colors"
            disabled={quantity >= product.stock}
          >
            <Plus size={16} />
          </button>
        </div>

        <div className="text-right">
          <p className="font-bold text-lg text-gray-900">
            Rs. {itemTotal.toFixed(2)}
          </p>
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeFromCart(product.id)}
            className="mt-2 flex items-center gap-1"
          >
            <Trash2 size={14} />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};
