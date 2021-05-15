import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import { logout } from '../actions/userActions';
import { logout as log } from '../actions/adminActions'
import Logo from '../images/logo.png'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const adminLogin = useSelector((state) => state.adminLogin)
    const { adminInfo } = adminLogin

    const logoutAdmin = () => {
        dispatch(log())
        dispatch(logout())
    }



    return (
        <header>
            <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src={Logo} style={{ width: "50px", height: "50px" }} alt="fireSpot" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>

                        <Nav className='ml-auto'>



                            {userInfo || adminInfo ? (
                                <>

                                    <LinkContainer to='/'>
                                        <Nav.Link onClick={logoutAdmin}>Logout</Nav.Link>
                                    </LinkContainer>

                                </>

                            ) : (
                                    <>
                                        <LinkContainer to='/contact'>
                                            <Nav.Link>Contact us </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to='/members'>
                                            <Nav.Link>Members</Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to='/admin'>
                                            <Nav.Link>Admin</Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}

                        </Nav>





                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header