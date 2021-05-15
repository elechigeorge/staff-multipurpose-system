import axios from 'axios'
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
    LOAN_SPECIFIC_REQUEST,
    LOAN_SPECIFIC_FAIL,
    LOAN_SPECIFIC_SUCCESS
} from '../constants/loanConstants'
import { logout } from './userActions'

export const getAllLoans = () => async (
    dispatch
) => {
    try {
        dispatch({ type: LOAN_GET_REQUEST })

        const { data } = await axios.get(
            `/loans`
        )

        dispatch({
            type: LOAN_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOAN_GET_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const getAllApprovedLoan = () => async (
    dispatch
) => {
    try {
        dispatch({ type: LOAN_APPROVED_GET_REQUEST })

        const { data } = await axios.get(
            `/loans`
        )

        dispatch({
            type: LOAN_APPROVED_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: LOAN_APPROVED_GET_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const createLoan = (amount, purpose) => async (dispatch, getState) => {
    try {
        dispatch({
            type: LOAN_CREATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post(`/loans`, { amount, purpose }, config)

        dispatch({
            type: LOAN_CREATE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LOAN_CREATE_FAIL,
            payload: message,
        })
    }
}


export const getMemberSpecificLoan = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: LOAN_SPECIFIC_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.get(`/loans/member`, config)

        dispatch({
            type: LOAN_SPECIFIC_SUCCESS,
            payload: data,
        })
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        if (message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: LOAN_SPECIFIC_FAIL,
            payload: message,
        })
    }
}




// export const deleteProduct = (id) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: PRODUCT_DELETE_REQUEST,
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }

//         await axios.delete(`/api/products/${id}`, config)

//         dispatch({
//             type: PRODUCT_DELETE_SUCCESS,
//         })
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//         if (message === 'Not authorized, token failed') {
//             dispatch(logout())
//         }
//         dispatch({
//             type: PRODUCT_DELETE_FAIL,
//             payload: message,
//         })
//     }
// }



// export const updateProduct = (product) => async (dispatch, getState) => {
//     try {
//         dispatch({
//             type: PRODUCT_UPDATE_REQUEST,
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }

//         const { data } = await axios.put(
//             `/api/products/${product._id}`,
//             product,
//             config
//         )

//         dispatch({
//             type: PRODUCT_UPDATE_SUCCESS,
//             payload: data,
//         })
//         dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//         if (message === 'Not authorized, token failed') {
//             dispatch(logout())
//         }
//         dispatch({
//             type: PRODUCT_UPDATE_FAIL,
//             payload: message,
//         })
//     }
// }

// export const createProductReview = (productId, review) => async (
//     dispatch,
//     getState
// ) => {
//     try {
//         dispatch({
//             type: PRODUCT_CREATE_REVIEW_REQUEST,
//         })

//         const {
//             userLogin: { userInfo },
//         } = getState()

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${userInfo.token}`,
//             },
//         }

//         await axios.post(`/api/products/${productId}/reviews`, review, config)

//         dispatch({
//             type: PRODUCT_CREATE_REVIEW_SUCCESS,
//         })
//     } catch (error) {
//         const message =
//             error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//         if (message === 'Not authorized, token failed') {
//             dispatch(logout())
//         }
//         dispatch({
//             type: PRODUCT_CREATE_REVIEW_FAIL,
//             payload: message,
//         })
//     }
// }

// export const listTopProducts = () => async (dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_TOP_REQUEST })

//         const { data } = await axios.get(`/api/products/top`)

//         dispatch({
//             type: PRODUCT_TOP_SUCCESS,
//             payload: data,
//         })
//     } catch (error) {
//         dispatch({
//             type: PRODUCT_TOP_FAIL,
//             payload:
//                 error.response && error.response.data.message
//                     ? error.response.data.message
//                     : error.message,
//         })
//     }
// }