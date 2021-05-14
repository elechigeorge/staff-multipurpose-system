import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

import Admin from '../Model/Admin.js'
import Members from '../Model/Member.js'
import Loan from '../Model/Loan.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await Admin.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            staffID: user.staffID,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(500)
        throw new Error('server error')
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, staffID } = req.body

    const userExists = await Admin.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await Admin.create({
        name,
        email,
        password,
        staffID
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            staffID: user.staffID,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})
// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await Admin.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,

        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

const updateMemberFinancialStatus = asyncHandler(async (req, res) => {

    const id = req.params.id
    const user = await Member.findById(id)
    const loans = await Loans.find({})

    let getLoan;

    if (loans.user.some((usr) => like.usr.toString() === user._id)) {
        getLoan = usr.amount;
    } else {
        getLoan = 0
    }


    if (user) {

        const { asset, loan, credit_status, debit_status, remark } = user.financial
        asset: req.body.asset
        loan: getLoan
        credit_status: req.body.creditStatus
        debit_status: req.body.debitStatus
        remark: req.body.remark

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            financial: updatedUser.financial,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})


const getMembers = asyncHandler(async (req, res) => {
    const users = await Members.find({})
    res.json(users)
})


// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getMemberById = asyncHandler(async (req, res) => {
    const id = req.params.id;

    // check for member 
    const memberExist = await Members.findById(id);

    if (memberExist) {
        res.json(memberExist)
    } else {
        res.status(404)
        throw new Error('Member not found')
    }

})


// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await Admin.findById(req.params.id).select('-password')

    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})



export {
    authUser,
    registerUser,
    getUserProfile,
    updateMemberFinancialStatus,
    getMembers,
    getUserById,
    getMemberById,
}
