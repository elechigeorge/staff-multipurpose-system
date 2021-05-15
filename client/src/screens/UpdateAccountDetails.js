import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserAccount } from '../actions/userActions'
import { USER_UPDATE_ACCOUNT_RESET } from '../constants/userConstants'



function UpdateAccountDetails({ match, history }) {

    const [accountName, setAccountName] = useState('')
    const [number, setNumber] = useState('')
    const [bank, setBank] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    const userUpdate = useSelector((state) => state.userUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = userUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_ACCOUNT_RESET })
            history.push('/m/dashboard')
        }
        // else {
        //   if (!user.name || user._id !== userId) {
        //     dispatch(getUserDetails(userId))
        //   } else {
        //     setName(user.name)
        //     setEmail(user.email)
        //     setIsAdmin(user.isAdmin)
        //   }

    }, [dispatch, history, userInfo, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUserAccount({ _id: userInfo._id, accountName, number, bank }))

        setBank('')
        setAccountName('')
        setNumber('')
    }


    return (
        <div>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Account Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter account name'
                                    value={accountName}
                                    onChange={(e) => setAccountName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='number'>
                                <Form.Label>Account Number</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Account Number'
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='bank'>
                                <Form.Label>Bank</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Bank Name'
                                    value={bank}
                                    onChange={(e) => setBank(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='success' className="btn-block">
                                Update
            </Button>
                        </Form>
                    )}
            <hr />
            <div>
                <ListGroup>
                    <h3>Account Information</h3>
                    <ListGroup.Item>Account Name: {userInfo.account_details.account_name}</ListGroup.Item>
                    <ListGroup.Item>Account Number: {userInfo.account_details.number}</ListGroup.Item>
                    <ListGroup.Item>Bank Name: {userInfo.account_details.bank}</ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    )
}

export default UpdateAccountDetails;
