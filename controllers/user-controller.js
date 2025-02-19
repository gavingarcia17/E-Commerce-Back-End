import { User } from '../models/index.js';

// Example controller functions
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Define and export the loginUser function
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).json({ message: 'No user found with this email!' });
      return;
    }

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      res.status(401).json({ message: 'Incorrect password!' });
      return;
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add other controller functions as needed
