const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/loandomain', viewsController.getLandingPAge);
router.get('/aboutus', viewsController.getAboutUsForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/login', viewsController.getLoginForm);
router.get('/userProfile', viewsController.getLoginForm1);
//router.get('/logout', viewsController.getSignInForm);
// router.get('/loginUser', viewsController.getLoginForm);



module.exports = router;
