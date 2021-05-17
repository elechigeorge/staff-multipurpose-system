import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateAccountReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers';

import {
    getAllApprovedLoanReducer,
    getAllLoansReducer,
    loanDeleteReducer,
    approveLoanReducer,
    loanCreateReducer,
    getSpecificLoansReducer
} from './reducers/loanReducer'

import {
    adminLoginReducer,
    adminRegisterReducer,
    memberDetailsReducer,
    memberListReducer,
    memberUpdateFinancialReducer
} from './reducers/adminReducer';


const reducer = combineReducers({
    adminLogin: adminLoginReducer,
    adminRegister: adminRegisterReducer,

    memberDetail: memberDetailsReducer,
    memberList: memberListReducer,
    memberUpdate: userUpdateAccountReducer,
    memberFinancialUpdate: memberUpdateFinancialReducer,

    loanCreate: loanCreateReducer,
    approveLoan: approveLoanReducer,
    approvedLoan: getAllApprovedLoanReducer,
    allLoan: getAllLoansReducer,
    loanDelete: loanDeleteReducer,
    currentMember: getSpecificLoansReducer,



    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

})



const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const adminInfoFromStorage = localStorage.getItem('adminInfo')
    ? JSON.parse(localStorage.getItem('adminInfo'))
    : null


const initialState = {

    userLogin: { userInfo: userInfoFromStorage },
    adminLogin: { adminInfo: adminInfoFromStorage },
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;