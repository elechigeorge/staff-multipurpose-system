import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tab, Button, Row, Col, Nav } from 'react-bootstrap';
import MemberList from './MemberList';
import AdminInformation from './AdminInfoScreen';
import ApprovedLoans from './ApprovedLoanScreen';
import LoanRequests from './LoanRequests';

function Dashboard() {


    const dispatch = useDispatch();

    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, adminInfo } = adminLogin;

    return (
        <div>
            {adminInfo && (
                <div>
                    <h1 className="mb-5">Welcome {adminInfo.name}</h1>
                    <div>
                        <Tab.Container variant="success" id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills success" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">All Members</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Approved Loans</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Loan Requests</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Admin Info.</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <MemberList />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">
                                            <ApprovedLoans />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="third">
                                            <LoanRequests />
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="fourth">
                                            <AdminInformation />
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

export default Dashboard
