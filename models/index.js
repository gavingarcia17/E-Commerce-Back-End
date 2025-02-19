import Sequelize from 'sequelize';
import sequelize from '../config/connection.js';
import Product from './Product.js';
import Category from './Category.js';
import Tag from './Tag.js';
import ProductTag from './ProductTag.js';
import User from './User.js'; // Import the User model

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

export { Product, Category, Tag, ProductTag, User }; // Export the User model
