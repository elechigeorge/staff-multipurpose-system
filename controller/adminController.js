import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

import Admin from '../Model/Admin.js'
import Members from '../Model/Member.js'

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

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateMemberAccount = asyncHandler(async (req, res) => {
    const user = await Member.findById(req.user._id)

    if (user) {

        const { bank, account_name, number } = user.account_details
        bank = req.body.bank
        account_name = req.body.account_name
        number = req.body.number

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            account_details: updatedUser.account_details,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found');
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
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
    updateMemberAccount,
    getMembers,
    getUserById,
    getMemberById,
}
