const User = require('../models/User');

const authenticate = async (req, res, next) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(401).json({ error: 'Unauthorized: Missing credentials' });
  }

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  req.user = user;
  next();
};

module.exports = authenticate;
