import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';


function MemberInformation() {


    const dispatch = useDispatch();

    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, adminInfo } = adminLogin;


    return (
        <div>
            {adminInfo && (
                <div>

                    <ListGroup>
                        <ListGroup.Item action>Name: {adminInfo.name}</ListGroup.Item>

                        <ListGroup.Item action>Email: {adminInfo.email}</ListGroup.Item>
                        <ListGroup.Item action>Staff ID: {adminInfo.staffID}</ListGroup.Item>

                    </ListGroup>
                </div>
            )}
        </div>
    )
}

export default MemberInformation
