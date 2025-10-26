import React from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export const CartSummary: React.FC = () => {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 5000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({cart.length} items)</span>
          <span>Rs. {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee</span>
          <span className={deliveryFee === 0 ? 'text-fresh-600 font-medium' : ''}>
            {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee.toFixed(2)}`}
          </span>
        </div>

        {deliveryFee > 0 && (
          <p className="text-sm text-gray-500">
            Add Rs. {(5000 - subtotal).toFixed(2)} more for free delivery
          </p>
        )}

        <div className="border-t pt-3 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span className="text-primary-600">Rs. {total.toFixed(2)}</span>
        </div>
      </div>

      <Button
        onClick={() => navigate('/checkout')}
        className="w-full"
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </Button>

      <Button
        onClick={() => navigate('/products')}
        variant="outline"
        className="w-full mt-3"
      >
        Continue Shopping
      </Button>
    </div>
  );
};
