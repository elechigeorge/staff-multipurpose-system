import {
    LOAN_APPROVED_GET_FAIL,
    LOAN_APPROVED_GET_REQUEST,
    LOAN_APPROVED_GET_SUCCESS,
    LOAN_APPROVE_FAIL,
    LOAN_APPROVE_REQUEST,
    LOAN_APPROVE_SUCCESS,
    LOAN_CREATE_FAIL,
    LOAN_CREATE_REQUEST,
    LOAN_CREATE_SUCCESS,
    LOAN_DELETE_FAIL,
    LOAN_DELETE_REQUEST,
    LOAN_DELETE_SUCCESS,
    LOAN_GET_FAIL,
    LOAN_GET_REQUEST,
    LOAN_GET_SUCCESS,
    LOAN_SPECIFIC_FAIL,
    LOAN_SPECIFIC_REQUEST,
    LOAN_SPECIFIC_SUCCESS
} from '../constants/loanConstants'

export const getAllLoansReducer = (state = { loans: [] }, action) => {
    switch (action.type) {
        case LOAN_GET_REQUEST:
            return { loading: true, loans: [] }
        case LOAN_GET_SUCCESS:
            return {
                loading: false, loans: action.payload
            }
        case LOAN_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const getSpecificLoansReducer = (state = { loans: [] }, action) => {
    switch (action.type) {
        case LOAN_SPECIFIC_REQUEST:
            return { loading: true, loans: [] }
        case LOAN_SPECIFIC_SUCCESS:
            return {
                loading: false, loans: action.payload
            }
        case LOAN_SPECIFIC_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const getAllApprovedLoanReducer = (state = { loans: [] }, action) => {
    switch (action.type) {
        case LOAN_APPROVED_GET_REQUEST:
            return { loading: true, loans: [] }
        case LOAN_APPROVED_GET_SUCCESS:
            return {
                loading: false, loans: action.payload
            }
        case LOAN_APPROVED_GET_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const approveLoanReducer = (
    state = { loan: {} },
    action
) => {
    switch (action.type) {
        case LOAN_APPROVE_REQUEST:
            return { loading: true, loan: {} }
        case LOAN_APPROVE_SUCCESS:
            return { loading: false, loan: action.payload }
        case LOAN_APPROVE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const loanDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAN_DELETE_REQUEST:
            return { loading: true }
        case LOAN_DELETE_SUCCESS:
            return { loading: false, success: true }
        case LOAN_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const loanCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAN_CREATE_REQUEST:
            return { loading: true }
        case LOAN_CREATE_SUCCESS:
            return { loading: false, success: true, loan: action.payload }
        case LOAN_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
