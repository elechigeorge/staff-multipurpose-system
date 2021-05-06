import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Button, Row, Col, Nav } from 'react-bootstrap';
import AccountDetails from './UpdateAccountDetails';
import MemberInformation from './MemberInformation';

function MemberDashboard() {


    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    return (
        <div>
            {userInfo && (
                <div>
                    <h1 className="mb-5">Welcome {userInfo.personal_details.first_name}</h1>
                    <div>
                        <Tab.Container variant="success" id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills success" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Account Details</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Member Info.</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <AccountDetails />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="fourth">
                                            <MemberInformation />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MemberDashboard
