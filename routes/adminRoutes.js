const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticate = require('../middlewares/authMiddleware');

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/assignments', authenticate, adminController.getAssignments);
router.post('/assignments/:id/accept', authenticate, adminController.acceptAssignment);
router.post('/assignments/:id/reject', authenticate, adminController.rejectAssignment);

module.exports = router;
