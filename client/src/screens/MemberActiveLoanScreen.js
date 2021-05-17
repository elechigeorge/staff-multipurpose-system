import React, { useEffect } from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getMemberSpecificLoan } from '../actions/loanActions'

const MemberLoanScreen = ({ history }) => {

    const dispatch = useDispatch()

    const currentMember = useSelector((state) => state.currentMember)
    const { loading, error, loans } = currentMember

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            dispatch(getMemberSpecificLoan())
        } else {
            history.push('/m/login')
        }
    }, [dispatch, history, userInfo])

    return (
        <>
            <h1>Loans</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <div>
                            {loans.length !== 0 ? loans.map(loan => (
                                <ListGroup>

                                    <ListGroup.Item>Amount: {loan.amount}</ListGroup.Item>
                                    <ListGroup.Item>Purpose: {loan.purpose}</ListGroup.Item>
                                    <ListGroup.Item>Status: {!loan.status ? <Button variant="info">Pending</Button> : <Button variant="success">Success</Button>}</ListGroup.Item>
                                </ListGroup>
                            )) : "No current loan"}

                        </div>
                    )}
        </>
    )
}

export default MemberLoanScreen