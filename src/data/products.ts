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
    image: 'https://www.greenag.com.au/assets/full/GAC2002.jpg?20230516121631',
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
    image: 'https://www.themeatman.co.uk/cdn/shop/products/chicken-wings.jpg?v=1631783365&w=500',
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
    image: 'https://mapleleafhh.com/wp-content/uploads/Drums-e1555757165635.jpg',
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
    image: 'https://thecookful.com/wp-content/uploads/2018/09/chicken-thighs-instant-pot-feature-1392x780.jpg',
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
    image:"https://cdn.pixabay.com/photo/2019/09/10/17/09/food-4466729_1280.jpg",
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
    image: 'https://flemingbutchers.co.uk/wp-content/uploads/2021/03/SB74-1.jpg',
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
    image: 'https://www.orchardhillfarmkent.co.uk/wp-content/uploads/2025/04/barbeque-frozen-768x768.jpg?w=500',
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
    image: 'https://cdn.wikifarmer.com/images/detailed/2023/09/iStock-1068858270.jpg',
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
    image: 'https://recipes-nz.b-cdn.net/ab6887c0d60149ad07ee34161c189cd4e1a442fc-1400x854.jpg?auto=format&fit=max&q=75&w=700',
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
    image: 'https://i.ytimg.com/vi/5nL24yEHPOg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCTsH40BbAeRs29OU4FbGBiyttbg',
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
    image: 'https://heatherlea.ca/wp-content/uploads/2022/08/DSC_0219.jpg',
    isSpecialOffer: true,
    discount: 12,
    rating: 4.7,
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
    image: 'https://doofdoof.in/cdn/shop/products/muttoncurrycut_38809c56-2d47-4cde-9024-160f220e880e.jpg?v=1679555517&width=1445',
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
    image: 'https://meatmart.lk/wp-content/uploads/2023/06/Screenshot_20200818_121148-e1687856000316.jpg',
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
