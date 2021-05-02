import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../Model/Member.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    const { password, staffID } = req.body

    const user = await User.findOne({ staffID })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            _id: user._id,
            password: user.password,
            email: user.email,
            staffID: user.staffID,
            personal_details: {

                gender: user.personal_details.gender,
                first_name: user.personal_details.first_name,
                last_name: user.personal_details.last_name,
                other_name: user.personal_details.other_name,
                department: user.personal_details.department
            },
            contact_details: {
                address: user.contact_details.addess,
                city: user.contact_details.city,
                state: user.contact_details.state,
                telephone: user.contact_details.telephone
            },
            next_of_kin: {
                full_name: user.next_of_kin.full_name,
                address: user.next_of_kin.address,
                city: user.next_of_kin.city,
                state: user.next_of_kin.state,
                email: user.next_of_kin.email,
                phone: user.next_of_kin.phone,
                relationship: user.next_of_kin.relationship
            },
            contributions: {
                savings: user.contributions.savings
            },
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid credentials')
    }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { staffID } = req.body

    const userExists = await User.findOne({ staffID })

    if (userExists) {
        res.status(400)
        throw new Error('Member already registered')
    }

    const user = await User.create({
        password: req.body.password,
        email: req.body.email,
        staffID: req.body.staffID,
        personal_details: {
            gender: req.body.personal_details.gender,
            first_name: req.body.personal_details.first_name,
            last_name: req.body.personal_details.last_name,
            other_name: req.body.personal_details.other_name,
            department: req.body.personal_details.department

        },
        contact_details: {
            address: req.body.contact_details.addess,
            city: req.body.contact_details.city,
            state: req.body.contact_details.state,
            telephone: req.body.contact_details.telephone
        },
        next_of_kin: {
            full_name: req.body.next_of_kin.full_name,
            address: req.body.next_of_kin.address,
            city: req.body.next_of_kin.city,
            state: req.body.next_of_kin.state,
            email: req.body.next_of_kin.email,
            phone: req.body.next_of_kin.phone,
            relationship: req.body.next_of_kin.relationship
        },
        contributions: {
            savings: req.body.contributions.savings
        }
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            password: user.password,
            email: user.email,
            staffID: user.staffID,
            personal_details: {
                gender: user.personal_details.gender,
                first_name: user.personal_details.first_name,
                last_name: user.personal_details.last_name,
                other_name: user.personal_details.other_name,
                department: user.personal_details.department
            },
            contact_details: {
                address: user.contact_details.addess,
                city: user.contact_details.city,
                state: user.contact_details.state,
                telephone: user.contact_details.telephone
            },
            next_of_kin: {
                full_name: user.next_of_kin.full_name,
                address: user.next_of_kin.address,
                city: user.next_of_kin.city,
                state: user.next_of_kin.state,
                email: user.next_of_kin.email,
                phone: user.next_of_kin.phone,
                relationship: user.next_of_kin.relationship
            },
            contributions: {
                savings: user.contributions.savings
            },
            token: generateToken(user._id)
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
    const user = await User.findById(req.user._id)

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
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id),
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove()
        res.json({ message: 'User removed' })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password')

    if (user) {
        res.json(user)
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin = req.body.isAdmin

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

export {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
}
