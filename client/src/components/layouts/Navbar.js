import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

const NavbarSetup = ({ auth: { isAuthenticated }, logout }) => {
    const authLinks = (
        <div>
            <Navbar expand="lg" className="text-light bg-success">
                <Container>
                    <Navbar.Brand href="/">Blogging System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link href="/posts">Posts</Nav.Link>
                            <Nav.Link href="/dashboard">Github</Nav.Link>
                        </Nav>
                        <Nav>

                            <Nav.Link href="/login" onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

    const guestLinks = (
        <div>
            <Navbar expand="lg" className="text-light bg-success">
                <Container>
                    <Navbar.Brand href="/">Blogging System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ">
                            <Nav.Link target="_blank" href="https://github.com/elechigeorge">Github</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/register">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

    return (

        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>

    );
};

NavbarSetup.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavbarSetup);