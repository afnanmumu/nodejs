const express = require('express');
const router = express.Router();
const { createTenant } = require('../controllers/tenantController');

router.post('/tenants', createTenant);

module.exports = router;