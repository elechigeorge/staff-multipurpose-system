import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getAllMembers } from '../actions/adminActions'

const UserListScreen = ({ history }) => {
    const dispatch = useDispatch()

    const memberList = useSelector((state) => state.memberList)
    const { loading, error, users } = memberList

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin



    useEffect(() => {
        if (adminInfo && adminInfo.isAdmin) {
            dispatch(getAllMembers())
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
                            {users && users.map(user => (
                                <ListGroup className="mb-5">
                                    <ListGroup.Item action>First Name: {user.personal_details.first_name}</ListGroup.Item>
                                    <ListGroup.Item action>Last Name: {user.personal_details.last_name}</ListGroup.Item>
                                    <ListGroup.Item action>Email: {user.email}</ListGroup.Item>
                                    <ListGroup.Item action>Staff ID: {user.staffID}</ListGroup.Item>
                                    <ListGroup.Item action>Gender: {user.personal_details.gender}</ListGroup.Item>
                                    <ListGroup.Item action>Department: {user.personal_details.department}</ListGroup.Item>

                                    <ListGroup.Item action>Phone Number: {user.contact_details.telephone}</ListGroup.Item>
                                </ListGroup>
                            ))}
                        </div>
                    )}
        </>
    )
}

export default UserListScreen