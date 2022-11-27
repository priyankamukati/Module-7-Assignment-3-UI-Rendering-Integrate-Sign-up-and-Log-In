const Loan = require('./../model/loanModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');
const User = require('../model/userModel');

exports.getAllLoans =   async (req, res) => {
  
  try {
    
    const features = new APIFeatures(Loan.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;
    res.status(200).render('loans', {
      title: `Get Loans`,
      status: 'success',
      results: loans.length,
      data: loans
    });
  } catch (err) {
    res.status(404).render({
      status: 'fail',
      message: err
    });
  }
};

exports.getNewLoanForm = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loan`
  });
};


exports.createNewLoan = async (req, res, next) => {

  const newUser = await Loan.create({
  customerName: req.body.cname,
  phoneNumber: req.body.pnumber,
  address: req.body.address,
  loanType: req.body.loantype,
  loanAmount: req.body.loanamount,
  interest: req.body.interest, 
  loanTermYears: req.body.loantermyears,
  description: req.body.description,

});


      res.status(200).render('userProfilePage1', {
        title: 'Login | Enter User Credentials'
      });
    };


 
