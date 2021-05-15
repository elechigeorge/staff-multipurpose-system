import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { createLoan } from '../actions/loanActions'




function MemberApplyScreen({ match, history }) {

    const [amount, setAmount] = useState('')
    const [purpose, setPurpose] = useState('')

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    const loanCreate = useSelector((state) => state.loanCreate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
        loan
    } = loanCreate;

    // useEffect(() => {
    //     if (successUpdate) {
    //         dispatch({ type: USER_UPDATE_ACCOUNT_RESET })
    //         history.push('/m/dashboard')
    //     }


    // }, [dispatch, history, userInfo, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()


        dispatch(createLoan(amount, purpose))




        setAmount('')
        setPurpose('')
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
                                <Form.Label>Amount</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Amount'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='number'>
                                <Form.Label>Purpose</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Solid Purpose '
                                    value={purpose}
                                    onChange={(e) => setPurpose(e.target.value)}
                                ></Form.Control>
                            </Form.Group>



                            <Button type='submit' variant='success' className="btn-block">
                                Apply Now
            </Button>
                        </Form>
                    )}

            <hr />
            <div>
                {loan && (
                    <ListGroup>
                        <h3>Applied Loan</h3>
                        <ListGroup.Item>Amount: {loan.amount}</ListGroup.Item>
                        <ListGroup.Item>Purpose: {loan.purpose}</ListGroup.Item>
                        <ListGroup.Item>Status: {!loan.status ? <Button variant="danger">Pending</Button> : <Button variant="success">Approved</Button>}</ListGroup.Item>
                    </ListGroup>
                )}



            </div>
        </div>
    )
}

export default MemberApplyScreen;
