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
                        <ListGroup.Item action>First Name: {userInfo.personal_details.first_name}</ListGroup.Item>
                        <ListGroup.Item action>Last Name: {userInfo.personal_details.last_name}</ListGroup.Item>
                        <ListGroup.Item action>Email: {userInfo.email}</ListGroup.Item>
                        <ListGroup.Item action>Staff ID: {userInfo.staffID}</ListGroup.Item>
                        <ListGroup.Item action>Gender: {userInfo.personal_details.gender}</ListGroup.Item>
                        <ListGroup.Item action>Department: {userInfo.personal_details.department}</ListGroup.Item>

                        <ListGroup.Item action>Phone Number: {userInfo.contact_details.telephone}</ListGroup.Item>
                    </ListGroup>
                </div>
            )}
        </div>
    )
}

export default MemberInformation
