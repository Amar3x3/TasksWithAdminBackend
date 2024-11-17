const User = require('../models/User');
const Assignment = require('../models/Assignment');

// Register Admin
exports.registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const existingAdmin = await User.findOne({ email });

  if (existingAdmin) {
    return res.status(400).json({ error: 'Admin already exists' });
  }

  const admin = new User({ name, email, password, role: 'admin' });
  await admin.save();
  res.json({ message: 'Admin registered successfully' });
};

// Admin Login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
 try{
    const admin = await User.findOne({ email, password, role: 'admin' });

    if (!admin) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
  
    res.json({ message: 'Login successful', admin });
 }catch(e){
    console.log(e);
 }
};

// Get Assignments for Admin
exports.getAssignments = async (req, res) => {
  const { user } = req;
  try{
    const assignments = await Assignment.find({ adminId: user._id });
  res.json(assignments);
  }catch(e){
    console.log(e);
  }
};

// Accept Assignment
exports.acceptAssignment = async (req, res) => {
  try{
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'accepted' });
  res.json({ message: 'Assignment accepted' });
  }catch(e){
    console.log(e);
  }
};

// Reject Assignment
exports.rejectAssignment = async (req, res) => {
  try{
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'rejected' });
  res.json({ message: 'Assignment rejected' });
  }catch(e){
    console.log(e);
  }
};
