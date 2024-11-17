const User = require('../models/User');
const Assignment = require('../models/Assignment');

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    try {
        const user = new User({ name, email, password, role: 'user' });
        await user.save();
        res.json({ message: 'User registered successfully' });
    } catch (e) {
        console.log(e);
    }
};
exports.getAllAssignments = async (req, res) => {
    const { email, password, status } = req.query; 
    try {
    
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    
      const query = { userId: user._id };
      if (status) {
        query.status = status;
      }
      const assignments = await Assignment.find(query).populate('adminId', 'name email');
      return res.json(assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

// User Login
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user });
    }
    catch (e) {
        console.log(e);
    }
};

// Upload Assignment
exports.uploadAssignment = async (req, res) => {
    const { task, adminId } = req.body;
    const { user } = req;

    try {
        const assignment = new Assignment({ userId: user._id, adminId, task });
        await assignment.save();
        res.json({ message: 'Assignment uploaded successfully' });
    } catch (e) {
        console.log(e);
    }
};

// Fetch All Admins
exports.getAllAdmins = async (req, res) => {
    const admins = await User.find({ role: 'admin' });
    res.json(admins);
};
