import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, Button } from 'react-bootstrap';
import { getAllApprovedLoan } from "../actions/loanActions"
import Message from '../components/Message'
import Loader from '../components/Loader'

function ApprovedLoans() {



    const dispatch = useDispatch();

    const approvedLoan = useSelector((state) => state.approvedLoan)
    const { loading, error, loans } = approvedLoan;

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin


    useEffect(() => {
        if (adminInfo) {
            dispatch(getAllApprovedLoan())
        }


    }, [dispatch, adminInfo])


    return (
        <>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <div>
                            {loans && loans.map(loan => (
                                <ListGroup className="mb-5" key={loan._id}>
                                    <ListGroup.Item action>Amount: {loan.amount}</ListGroup.Item>
                                    <ListGroup.Item action>Purpose: {loan.purpose}</ListGroup.Item>
                                    <ListGroup.Item action>Status: {loan.status ? ("approved") : "pending"}</ListGroup.Item>



                                    <LinkContainer to={`/user/${loan.user}`}>
                                        <Button className="btn-block btn-success my-3">Applicant</Button>
                                    </LinkContainer>

                                </ListGroup>
                            ))}
                        </div>
                    )}
        </>
    )
}

export default ApprovedLoans;
