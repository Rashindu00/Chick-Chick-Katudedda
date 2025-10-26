export enum Category {
  CHICKEN = 'Chicken',
  CHICKEN_PARTS = 'Chicken Parts',
  SAUSAGES = 'Sausages',
  EGGS = 'Eggs',
  BEEF = 'Beef',
  FISH = 'Fish',
  MUTTON = 'Mutton',
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: 'kg' | 'unit' | 'pack';
  category: Category;
  stock: number;
  image: string;
  images?: string[];
  discount?: number;
  isFeatured?: boolean;
  isSpecialOffer?: boolean;
  rating?: number;
  reviews?: Review[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: Address;
  role: 'customer' | 'admin';
  favorites?: string[];
  orderHistory?: string[];
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export enum OrderStatus {
  PENDING = 'Pending',
  CONFIRMED = 'Confirmed',
  PROCESSING = 'Processing',
  OUT_FOR_DELIVERY = 'Out for Delivery',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
}

export enum PaymentMethod {
  CASH_ON_DELIVERY = 'Cash on Delivery',
  CARD = 'Card',
  BANK_TRANSFER = 'Bank Transfer',
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  deliveryAddress: Address;
  createdAt: string;
  updatedAt: string;
  deliveryDate?: string;
}

export interface FilterOptions {
  category?: Category | 'All';
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
  searchQuery?: string;
}
