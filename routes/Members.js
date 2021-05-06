import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updateMemberAccount,
} from '../controller/memberController.js';

import { protect, admin } from '../middleware/authentication.js'

router.route('/').post(registerUser).get(protect, admin, getUsers);

router.route('/update').put(updateMemberAccount, authUser, getUsers);

router.post('/login', authUser);

// router
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile)
// router
//   .route('/:id')
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser)

export default router