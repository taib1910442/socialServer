const express = require('express')
const { signup, signin, signout, forgotPassword, resetPassword, socialLogin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {userSignupValidator, passwordResetValidator} = require('../validator/index');

const router = express.Router();

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/social-login", socialLogin); 
router.put("/forgot-password", forgotPassword);
router.put("/reset-password", passwordResetValidator, resetPassword);


router.param("userId", userById);

module.exports = router;