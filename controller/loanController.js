import asyncHandler from 'express-async-handler'
import Member from '../Model/Member.js'
import Loan from '../Model/Loan.js';



const getAllApprovedLoanRequest = asyncHandler(async (req, res) => {

    const loans = await Loan.find({ status: true })

    if (!loans) {
        res.status(400);
        throw new Error('No available loan request')
    }

    res.status(200).json(loans);
})


const approveLoanRequest = asyncHandler(async (req, res) => {

    const id = req.params.id;

    const loanRequest = await Loan.findById(id);

    if (loanRequest || loanRequest.status === false) {
        loanRequest.status = true;

        await loanRequest.save();

        res.status(200).json(loanRequest);
    } else {
        res.status(400)
        throw new Error('Loan not found')
    }
})


const getAllLoanRequest = asyncHandler(async (req, res) => {


    const loanRequest = await Loan.find({});

    if (loanRequest) {


        res.status(200).json(loanRequest);
    } else {
        res.status(400)
        throw new Error('Loans not found')
    }
})

const getSpecificMemberLoanRequest = asyncHandler(async (req, res) => {

    // grab current member id and all loans

    const loans = await Loan.find({});



    if (loans.map(loan => loan.user.toString() === req.user._id)) {


        res.status(200).json(loans);
    } else {
        res.status(400)
        throw new Error('Loans not found')
    }
})



const createLoanRequest = asyncHandler(async (req, res) => {
    // grab loan body
    const { amount, purpose } = req.body

    // grab applicant data
    const user = req.user._id;

    // get all user data


    // make loan request 
    const newLoan = await Loan.create({
        amount,
        purpose,
        user
    })

    // save loan to db
    await newLoan.save();

    // send response
    res.status(201).json(newLoan);

})

const deleteLoanRequest = asyncHandler(async (req, res) => {
    const loan = await Loan.findById(req.params.id)

    if (loan) {
        await loan.remove()
        res.json({ message: 'loan removed' })
    } else {
        res.status(404)
        throw new Error('loan not found')
    }
})

const getLoanById = asyncHandler(async (req, res) => {
    const loan = await Loan.findById(req.params.id)

    if (loan) {
        res.status(200).json(loan)
    } else {
        res.status(404)
        throw new Error('loan not found')
    }
})


export {
    approveLoanRequest,
    getAllLoanRequest,
    getAllApprovedLoanRequest,
    createLoanRequest,
    deleteLoanRequest,
    getLoanById,
    getSpecificMemberLoanRequest
}