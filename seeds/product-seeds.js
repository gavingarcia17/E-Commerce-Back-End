import { Product } from '../models/index.js';

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  // Add more product data here
];

const seedProducts = async () => {
  await Product.bulkCreate(productData);
};

export default seedProducts;
