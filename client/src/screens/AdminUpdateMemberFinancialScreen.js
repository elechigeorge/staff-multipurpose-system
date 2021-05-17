import React, { useState, useEffect } from 'react';
import { Form, Button, ListGroup } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { updateMemberFinancialStatus } from '../actions/adminActions'



function UpdateFinancialDetails({ match, history }) {
    const memberId = match.params.id

    const [asset, setAsset] = useState('')
    const [loan, setLoan] = useState('')
    const [creditStatus, setCreditStatus] = useState('')
    const [debitStatus, setDebitStatus] = useState('')
    const [remark, setRemark] = useState('')

    const dispatch = useDispatch()



    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin;



    const memberFinancialUpdate = useSelector((state) => state.memberFinancialUpdate)
    const {
        loading,
        error,
        success,
        user
    } = memberFinancialUpdate;

    useEffect(() => {
        if (success) {
            window.alert("Successful")
        }

    }, [success])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateMemberFinancialStatus(memberId, asset, loan, creditStatus, debitStatus, remark))

        setAsset('')
        setLoan('')
        setCreditStatus('')
        setDebitStatus('')
        setRemark('')
    }


    return (
        <div>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <Form onSubmit={submitHandler}>
                            <div className="my-3 ">
                                <Button href="/dashboard" variant="success">Go Back</Button>
                            </div>
                            <h3>Update Financial Status</h3>
                            <Form.Group controlId='name'>
                                <Form.Label>Asset</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter member assets'
                                    value={asset}
                                    onChange={(e) => setAsset(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='loan'>
                                <Form.Label>Loans</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter member loan'
                                    value={loan}
                                    onChange={(e) => setLoan(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='credit'>
                                <Form.Label>Credit Status</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Member Credit Status'
                                    value={creditStatus}
                                    onChange={(e) => setCreditStatus(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='debit'>
                                <Form.Label>Debit Status</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter Debit Status'
                                    value={debitStatus}
                                    onChange={(e) => setDebitStatus(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='bank'>
                                <Form.Label>Remark</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Give your remark'
                                    value={remark}
                                    onChange={(e) => setRemark(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='success' className="btn-block">
                                Update
            </Button>
                            <div className="mb-5">

                            </div>
                        </Form>
                    )}


        </div>
    )
}

export default UpdateFinancialDetails;
