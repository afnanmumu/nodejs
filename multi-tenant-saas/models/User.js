const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tenant' },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
