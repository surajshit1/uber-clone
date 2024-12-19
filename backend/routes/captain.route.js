const express= require('express');
const router = express.Router();
const {body}= require('express-validator');
const captainController= require('../controllers/captain.controller.js');
const authMiddleware= require('../middlewares/auth.middleware.js');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 character'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 character'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
], captainController.registerCaptian)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 character')

], captainController.loginCaptain)

module.exports= router;

router.get('/profile', authMiddleware.authCaptain ,captainController.getCaptainProfile);

module.exports= router;

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports= router;