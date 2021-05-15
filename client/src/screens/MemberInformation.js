import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';


function MemberInformation() {


    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;


    return (
        <div>
            {userInfo && (
                <div>

                    <ListGroup>
                        <h3>Personal Information</h3>
                        <ListGroup.Item action>First Name: {userInfo.personal_details.first_name}</ListGroup.Item>
                        <ListGroup.Item action>Last Name: {userInfo.personal_details.last_name}</ListGroup.Item>
                        <ListGroup.Item action>Email: {userInfo.email}</ListGroup.Item>
                        <ListGroup.Item action>Staff ID: {userInfo.staffID}</ListGroup.Item>
                        <ListGroup.Item action>Gender: {userInfo.personal_details.gender}</ListGroup.Item>
                        <ListGroup.Item action>Department: {userInfo.personal_details.department}</ListGroup.Item>
                        <ListGroup.Item action>Department: {userInfo.personal_details.department}</ListGroup.Item>

                    </ListGroup>

                    <ListGroup>
                        <h3>Contact Information</h3>
                        <ListGroup.Item action>City: {userInfo.contact_details.city}</ListGroup.Item>
                        <ListGroup.Item action>State: {userInfo.contact_details.state}</ListGroup.Item>
                        <ListGroup.Item action>Phone: {userInfo.contact_details.telephone}</ListGroup.Item>

                    </ListGroup>

                    <ListGroup>
                        <h3>Next of Kin Information</h3>
                        <ListGroup.Item action>Name: {userInfo.next_of_kin.full_name}</ListGroup.Item>
                        <ListGroup.Item action>Address: {userInfo.next_of_kin.address}</ListGroup.Item>
                        <ListGroup.Item action>City: {userInfo.next_of_kin.city}</ListGroup.Item>
                        <ListGroup.Item action>State: {userInfo.next_of_kin.state}</ListGroup.Item>
                        <ListGroup.Item action>Email: {userInfo.next_of_kin.email}</ListGroup.Item>
                        <ListGroup.Item action>Phone: {userInfo.next_of_kin.phone}</ListGroup.Item>
                        <ListGroup.Item action>Relationship: {userInfo.next_of_kin.relationship}</ListGroup.Item>

                    </ListGroup>
                </div>
            )}
        </div>
    )
}

export default MemberInformation
