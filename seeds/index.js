import sequelize from '../config/connection.js';
import seedCategories from './category-seeds.js';
import seedProducts from './product-seeds.js';
import seedTags from './tag-seeds.js';
import seedProductTags from './product-tag-seeds.js';
import seedUsers from './user-seeds.js';

const seedAll = async () => {
  // Disable foreign key checks
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

  // Drop tables in the correct order
  await sequelize.drop();

  // Enable foreign key checks
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
