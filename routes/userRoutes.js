const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

router.get('/assignments', userController.getAllAssignments);

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/upload', authenticate, userController.uploadAssignment);
router.get('/admins', authenticate, userController.getAllAdmins);

module.exports = router;
