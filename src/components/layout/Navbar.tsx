import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Heart, Package } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const cartItemsCount = getCartItemsCount();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary-600">
              🐔 Chick Chick Katudedda
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
            <Link to="/grocery" className="text-gray-700 hover:text-fresh-600 font-medium transition-colors">
              Grocery
            </Link>
            <Link to="/special-offers" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Special Offers
            </Link>
            {isAdmin() && (
              <Link to="/admin" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Admin
              </Link>
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart size={24} className="text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/favorites" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Heart size={24} className="text-gray-700" />
                </Link>
                <Link to="/orders" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Package size={24} className="text-gray-700" />
                </Link>
                <div className="flex items-center gap-2">
                  <User size={20} className="text-gray-700" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button onClick={() => navigate('/login')} variant="outline" size="sm">
                  Login
                </Button>
                <Button onClick={() => navigate('/register')} size="sm">
                  Register
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary-600 font-medium">
                Products
              </Link>
              <Link to="/grocery" className="text-gray-700 hover:text-fresh-600 font-medium">
                Grocery
              </Link>
              <Link to="/special-offers" className="text-gray-700 hover:text-primary-600 font-medium">
                Special Offers
              </Link>
              {user ? (
                <>
                  <Link to="/favorites" className="text-gray-700 hover:text-primary-600 font-medium">
                    Favorites
                  </Link>
                  <Link to="/orders" className="text-gray-700 hover:text-primary-600 font-medium">
                    Orders
                  </Link>
                  {isAdmin() && (
                    <Link to="/admin" className="text-gray-700 hover:text-primary-600 font-medium">
                      Admin
                    </Link>
                  )}
                  <Button onClick={handleLogout} variant="outline" className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button onClick={() => navigate('/login')} variant="outline" className="w-full">
                    Login
                  </Button>
                  <Button onClick={() => navigate('/register')} className="w-full">
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
