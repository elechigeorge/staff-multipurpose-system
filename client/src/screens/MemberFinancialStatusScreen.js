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
                        <h3>Financial Status</h3>
                        <ListGroup.Item action>Asset: {userInfo.financial.asset}</ListGroup.Item>
                        <ListGroup.Item action>Current Loan: {userInfo.financial.loan}</ListGroup.Item>
                        <ListGroup.Item action>Credit Status: {userInfo.financial.credit_status}</ListGroup.Item>
                        <ListGroup.Item action>Debit Status: {userInfo.financial.debit_status}</ListGroup.Item>
                        <ListGroup.Item action>Remark: {userInfo.financial.remark}</ListGroup.Item>
                    </ListGroup>


                </div>
            )}
        </div>
    )
}

export default MemberInformation
