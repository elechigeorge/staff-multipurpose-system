import express from 'express'

const router = express.Router()
import {
    authUser,
    registerUser,
    getUserById,
    getMemberById,
    getMembers,
    updateMemberFinancialStatus,
} from '../controller/adminController.js';

import { protect, admin } from '../middleware/authentication.js';

router.route('/').post(registerUser).get(protect, admin, getMembers);

router.route('/members').get(getMembers);

router.route('/f/update/:id').put(updateMemberFinancialStatus, authUser);

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

export default router;