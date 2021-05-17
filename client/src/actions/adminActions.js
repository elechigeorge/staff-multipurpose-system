import axios from 'axios'
import {
    ADMIN_DETAILS_FAIL,
    ADMIN_DETAILS_REQUEST,
    ADMIN_DETAILS_SUCCESS,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGOUT,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_REQUEST,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_UPDATE_PROFILE_FAIL,
    ADMIN_UPDATE_PROFILE_REQUEST,
    ADMIN_UPDATE_PROFILE_SUCCESS,
    ADMIN_DETAILS_RESET,
    ADMIN_LIST_FAIL,
    ADMIN_LIST_SUCCESS,
    ADMIN_LIST_REQUEST,
    ADMIN_LIST_RESET,
    ADMIN_DELETE_REQUEST,
    ADMIN_DELETE_SUCCESS,
    ADMIN_DELETE_FAIL,
    ADMIN_UPDATE_FAIL,
    ADMIN_UPDATE_SUCCESS,
    ADMIN_UPDATE_REQUEST,
    FINANCIAL_UPDATE_FAIL,
    FINANCIAL_UPDATE_REQUEST,
    FINANCIAL_UPDATE_SUCCESS
} from '../constants/adminContants'


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/admins/login',
            { email, password },
            config
        )

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('adminInfo')

    dispatch({ type: ADMIN_LOGOUT })
    dispatch({ type: ADMIN_DETAILS_RESET })
    dispatch({ type: ADMIN_LIST_RESET })
    document.location.href = '/login'
}

export const register = (staffID, name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: ADMIN_REGISTER_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(
            '/admins',
            { staffID, name, email, password },
            config
        )

        dispatch({
            type: ADMIN_REGISTER_SUCCESS,
            payload: data,
        })

        dispatch({
            type: ADMIN_LOGIN_SUCCESS,
            payload: data,
        })

        localStorage.setItem('adminInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: ADMIN_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getSingleMember = (memberId) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_DETAILS_REQUEST,
        })



        const { data } = await axios.get(`/admins/member/${memberId}`)

        dispatch({
            type: ADMIN_DETAILS_SUCCESS,
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
            type: ADMIN_DETAILS_FAIL,
            payload: message,
        })
    }
}



export const getAllMembers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADMIN_LIST_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.get(`/admins/members`, config)

        dispatch({
            type: ADMIN_LIST_SUCCESS,
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
            type: ADMIN_LIST_FAIL,
            payload: message,
        })
    }
}

export const updateMemberFinancialStatus = (memberId, asset, loan, debitStatus, creditStatus, remark) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FINANCIAL_UPDATE_REQUEST,
        })

        const {
            adminLogin: { adminInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${adminInfo.token}`,
            },
        }

        const { data } = await axios.put(`/admins/f/update/${memberId}`,
            { asset, loan, creditStatus, debitStatus, remark }, config)

        dispatch({
            type: FINANCIAL_UPDATE_SUCCESS,
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
            type: FINANCIAL_UPDATE_FAIL,
            payload: message,
        })
    }
}
