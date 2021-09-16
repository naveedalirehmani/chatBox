const { Router} = require('express');
const router = Router();

const signUp = require('./signupRoutes.js');
const logIn = require('./loginRoutes.js');

router.use('/signup',signUp);
router.use('/login',logIn);

module.exports = router;