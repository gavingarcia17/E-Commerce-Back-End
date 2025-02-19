import { Router } from 'express';
import { Category, Product } from '../../models/index.js';

const router = Router();

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const { category_name } = req.body;
    if (!category_name) {
      return res.status(400).json({ message: 'category_name is required' });
    }
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT update a category by ID
router.put('/:id', async (req, res) => {
  try {
    const { category_name } = req.body;
    if (!category_name) {
      return res.status(400).json({ message: 'category_name is required' });
    }
    const updatedCategory = await Category.update(
      { category_name },
      {
        where: { id: req.params.id },
      }
    );
    if (!updatedCategory[0]) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;[
  {
    "id": 1,
    "category_name": "Category 1",
    "products": []
  },
  {
    "id": 2,
    "category_name": "Category 2",
    "products": []
  },
  {
    "id": 3,
    "category_name": "Category 3",
    "products": []
  },
  {
    "id": 4,
    "category_name": "Category 4",
    "products": []
  },
  {
    "id": 5,
    "category_name": "Category 5",
    "products": []
  },
  {
    "id": 6,
    "category_name": "Category 6",
    "products": []
  }
]