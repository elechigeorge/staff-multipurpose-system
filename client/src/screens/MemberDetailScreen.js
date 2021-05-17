import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import { ListGroup, Button } from 'react-bootstrap';
import { getSingleMember } from "../actions/adminActions"
import Message from '../components/Message'
import Loader from '../components/Loader'

function MemberDetailScreen({ match }) {
    const memberId = match.params.id;


    const dispatch = useDispatch();

    const memberDetails = useSelector((state) => state.memberDetail)
    const { loading, error, user } = memberDetails;

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin


    useEffect(() => {
        if (adminInfo) {
            dispatch(getSingleMember(memberId))
        }


    }, [memberId, adminInfo])


    return (
        <div className="mb-5">
            {loading && <Loader />}
            {error && <Message variant='danger'>{error}</Message>}

            {Object.keys(user).length !== 0 && (
                <div className="mb-5">
                    <div className="my-3 ">
                        <Button href="/dashboard" variant="success">Go Back</Button>
                    </div>
                    <ListGroup>
                        <h3>Personal Information</h3>
                        <ListGroup.Item action>First Name: {user.personal_details.first_name}</ListGroup.Item>
                        <ListGroup.Item action>Last Name: {user.personal_details.last_name}</ListGroup.Item>
                        <ListGroup.Item action>Email: {user.email}</ListGroup.Item>
                        <ListGroup.Item action>Staff ID: {user.staffID}</ListGroup.Item>
                        <ListGroup.Item action>Gender: {user.personal_details.gender}</ListGroup.Item>
                        <ListGroup.Item action>Department: {user.personal_details.department}</ListGroup.Item>
                        <ListGroup.Item action>Department: {user.personal_details.department}</ListGroup.Item>

                    </ListGroup>

                    <ListGroup>
                        <h3>Contact Information</h3>
                        <ListGroup.Item action>City: {user.contact_details.city}</ListGroup.Item>
                        <ListGroup.Item action>State: {user.contact_details.state}</ListGroup.Item>
                        <ListGroup.Item action>Phone: {user.contact_details.telephone}</ListGroup.Item>

                    </ListGroup>

                    <ListGroup>
                        <h3>Financial Information</h3>
                        <ListGroup.Item action>Assets: {user.financial.asset}</ListGroup.Item>
                        <ListGroup.Item action>Current Loan: {user.financial.loan}</ListGroup.Item>
                        <ListGroup.Item action>Credit Status: {user.financial.credit_status}</ListGroup.Item>
                        <ListGroup.Item action>Debit Status: {user.financial.debit_status}</ListGroup.Item>
                        <ListGroup.Item action>Remark: {user.financial.remark}</ListGroup.Item>
                        <Link to={`/member/update/${user._id}`} className="btn btn-success btn-block btn-md">Update Record</Link>

                    </ListGroup>

                    <ListGroup>
                        <h3>Account Information</h3>
                        <ListGroup.Item action>Assets: {user.account_details.bank}</ListGroup.Item>
                        <ListGroup.Item action>Credit Status: {user.account_details.account_name}</ListGroup.Item>
                        <ListGroup.Item action>Debit Status: {user.account_details.number}</ListGroup.Item>

                    </ListGroup>

                    <ListGroup>
                        <h3>Next of Kin Information</h3>
                        <ListGroup.Item action>Name: {user.next_of_kin.full_name}</ListGroup.Item>
                        <ListGroup.Item action>Address: {user.next_of_kin.address}</ListGroup.Item>
                        <ListGroup.Item action>City: {user.next_of_kin.city}</ListGroup.Item>
                        <ListGroup.Item action>State: {user.next_of_kin.state}</ListGroup.Item>
                        <ListGroup.Item action>Email: {user.next_of_kin.email}</ListGroup.Item>
                        <ListGroup.Item action>Phone: {user.next_of_kin.phone}</ListGroup.Item>
                        <ListGroup.Item action>Relationship: {user.next_of_kin.relationship}</ListGroup.Item>

                    </ListGroup>
                </div>
            )
            }
        </div >
    )
}

export default MemberDetailScreen
