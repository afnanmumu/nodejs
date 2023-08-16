const Tenant = require('../models/Tenant');

const createTenant = async (req, res) => {
  try {
    const { name } = req.body;
    const tenant = new Tenant({ name });
    await tenant.save();
    res.status(201).json(tenant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createTenant };
