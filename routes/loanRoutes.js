const express = require('express');
const loanController = require('../controllers/loanController');
const authHandlers = require('../controllers/authController');

const router = express.Router();

router.get('/viewAllloan', loanController.getAllLoans);
router.get('/loans',authHandlers.protect,loanController.getAllLoans);
router.get('/newLoan', loanController.getNewLoanForm);
router.post('/newLoan', authHandlers.protect, loanController.createNewLoan);

module.exports = router;
