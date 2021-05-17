import express from 'express'
const router = express.Router()
import {
    createLoanRequest,
    getAllLoanRequest,
    approveLoanRequest,
    deleteLoanRequest,
    getLoanById,
    getAllApprovedLoanRequest,
    getSpecificMemberLoanRequest
} from '../controller/loanController.js';

import { protect } from '../middleware/authentication.js'

router.route('/').post(protect, createLoanRequest).get(protect, getAllLoanRequest);

router.route('/approved').get(protect, getAllApprovedLoanRequest)

router.route('/member').get(protect, getSpecificMemberLoanRequest)


router
    .route('/:id')
    .delete(protect, deleteLoanRequest)
    .get(protect, getLoanById)
    .put(approveLoanRequest)

export default router;