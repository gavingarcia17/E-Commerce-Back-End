import { User } from '../models/index.js';

const userData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    password: 'password123',
  },
  // Add more user data here
];

const seedUsers = async () => {
  await User.bulkCreate(userData);
};

export default seedUsers;
