import { Category, Product } from '../types';

export const sampleProducts: Product[] = [
  // Chicken
  {
    id: '1',
    name: 'Fresh Whole Chicken',
    description: 'Premium quality fresh whole chicken, farm-raised',
    price: 850,
    unit: 'kg',
    category: Category.CHICKEN,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
    images: [
      'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500',
      'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
    ],
    isFeatured: true,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Organic Free-Range Chicken',
    description: 'Premium organic chicken, naturally raised',
    price: 1200,
    unit: 'kg',
    category: Category.CHICKEN,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
    discount: 10,
    isSpecialOffer: true,
    rating: 5,
  },

  // Chicken Parts
  {
    id: '3',
    name: 'Chicken Breast',
    description: 'Boneless, skinless chicken breast',
    price: 950,
    unit: 'kg',
    category: Category.CHICKEN_PARTS,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Chicken Wings',
    description: 'Fresh chicken wings, perfect for grilling',
    price: 750,
    unit: 'kg',
    category: Category.CHICKEN_PARTS,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500',
    isFeatured: true,
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Chicken Drumsticks',
    description: 'Juicy chicken drumsticks',
    price: 700,
    unit: 'kg',
    category: Category.CHICKEN_PARTS,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500',
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Chicken Thighs',
    description: 'Tender chicken thighs with bone',
    price: 680,
    unit: 'kg',
    category: Category.CHICKEN_PARTS,
    stock: 38,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500',
    rating: 4.5,
  },

  // Sausages
  {
    id: '7',
    name: 'Chicken Sausages',
    description: 'Premium chicken sausages with herbs',
    price: 1100,
    unit: 'kg',
    category: Category.SAUSAGES,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1612885716800-e5b13c1e3b6f?w=500',
    discount: 5,
    rating: 4.8,
  },
  {
    id: '8',
    name: 'Beef Sausages',
    description: 'Spicy beef sausages',
    price: 1300,
    unit: 'kg',
    category: Category.SAUSAGES,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826844c?w=500',
    isFeatured: true,
    rating: 4.7,
  },
  {
    id: '9',
    name: 'Mixed Sausages Pack',
    description: 'Variety pack of chicken and beef sausages',
    price: 1150,
    unit: 'kg',
    category: Category.SAUSAGES,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1612885716800-e5b13c1e3b6f?w=500',
    isSpecialOffer: true,
    discount: 15,
    rating: 4.6,
  },

  // Eggs
  {
    id: '10',
    name: 'Farm Fresh Eggs',
    description: 'Large brown eggs, 12 pack',
    price: 450,
    unit: 'pack',
    category: Category.EGGS,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500',
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: '11',
    name: 'Organic Free-Range Eggs',
    description: 'Premium organic eggs, 6 pack',
    price: 350,
    unit: 'pack',
    category: Category.EGGS,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1569288063643-5d29ad64f0b8?w=500',
    discount: 8,
    rating: 5,
  },

  // Beef
  {
    id: '12',
    name: 'Premium Beef Steak',
    description: 'High-quality beef steak, tender and juicy',
    price: 2200,
    unit: 'kg',
    category: Category.BEEF,
    stock: 20,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500',
    isFeatured: true,
    rating: 4.8,
  },
  {
    id: '13',
    name: 'Beef Mince',
    description: 'Fresh lean beef mince',
    price: 1800,
    unit: 'kg',
    category: Category.BEEF,
    stock: 25,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=500',
    rating: 4.6,
  },
  {
    id: '14',
    name: 'Beef Ribs',
    description: 'Premium beef ribs, perfect for BBQ',
    price: 2000,
    unit: 'kg',
    category: Category.BEEF,
    stock: 18,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500',
    isSpecialOffer: true,
    discount: 12,
    rating: 4.7,
  },

  // Fish
  {
    id: '15',
    name: 'Fresh Salmon',
    description: 'Atlantic salmon, fresh and filleted',
    price: 2500,
    unit: 'kg',
    category: Category.FISH,
    stock: 15,
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=500',
    isFeatured: true,
    rating: 4.9,
  },
  {
    id: '16',
    name: 'Sea Bass',
    description: 'Fresh sea bass, whole fish',
    price: 1900,
    unit: 'kg',
    category: Category.FISH,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500',
    rating: 4.5,
  },

  // Mutton
  {
    id: '17',
    name: 'Mutton Curry Cut',
    description: 'Fresh mutton, cut for curry',
    price: 1650,
    unit: 'kg',
    category: Category.MUTTON,
    stock: 22,
    image: 'https://images.unsplash.com/photo-1588347818036-8e8b8fd5a1e1?w=500',
    rating: 4.6,
  },
  {
    id: '18',
    name: 'Mutton Chops',
    description: 'Premium mutton chops',
    price: 1850,
    unit: 'kg',
    category: Category.MUTTON,
    stock: 16,
    image: 'https://images.unsplash.com/photo-1588347818036-8e8b8fd5a1e1?w=500',
    discount: 10,
    rating: 4.7,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return sampleProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: Category | 'All'): Product[] => {
  if (category === 'All') return sampleProducts;
  return sampleProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return sampleProducts.filter(product => product.isFeatured);
};

export const getSpecialOffers = (): Product[] => {
  return sampleProducts.filter(product => product.isSpecialOffer || product.discount);
};
