import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import { getAllLoans, approveLoans } from "../actions/loanActions"
import Message from '../components/Message';
import Loader from '../components/Loader';

function LoanRequests() {



    const dispatch = useDispatch();

    const allLoan = useSelector((state) => state.allLoan)
    const { loading, error, loans } = allLoan;

    const approveLoan = useSelector((state) => state.approveLoan)
    const {
        loading: loadingApprove,
        error: errorApprove,
        success: successApprove,
    } = approveLoan

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin


    useEffect(() => {
        if (adminInfo) {
            dispatch(getAllLoans())
        }


    }, [dispatch, adminInfo])


    const approve = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(approveLoans(id))
        }
    }


    return (
        <>

            {loading || loadingApprove ? (
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


                                    <Row>
                                        <Col>
                                            <LinkContainer to={`/user/${loan.user}`}>
                                                <Button className="btn-block btn-success my-3">Applicant</Button>
                                            </LinkContainer>
                                        </Col>
                                        {!loan.status && (
                                            <Col>
                                                <LinkContainer to={`/user/${loan.user}`}>
                                                    <Button onClick={() => approve(loan._id)} className="btn-block btn-success my-3">Approve</Button>
                                                </LinkContainer>
                                            </Col>
                                        )}

                                    </Row>


                                </ListGroup>
                            ))}
                        </div>
                    )}
        </>
    )
}

export default LoanRequests;
