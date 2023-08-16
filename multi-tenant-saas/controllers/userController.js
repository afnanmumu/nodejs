const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { username, email, tenantId } = req.body;
    const user = new User({ username, email, tenantId });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createUser };
