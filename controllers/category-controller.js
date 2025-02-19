import { Category } from '../models/index.js';

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body; // Destructure category_name from the request body
    if (!category_name) {
      return res.status(400).json({ message: 'category_name is required' });
    }
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create category', error: err.message });
  }
};

// Other controller functions...