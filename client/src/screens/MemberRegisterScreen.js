import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const MemberRegisterScreen = ({ location, history }) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [staffID, setStaffID] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [department, setDepartment] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [fullName, setFullName] = useState('')
    const [kaddress, setKaddress] = useState('')
    const [kcity, setKcity] = useState('')
    const [kstate, setKstate] = useState('')
    const [kemail, setKemail] = useState('')
    const [kphone, setKphone] = useState('')
    const [relationship, setRelationship] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState(null)

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister



    if (userInfo) {
        return <Redirect to="/m/dashboard" />
    }

    const submitHandler = (e) => {
        e.preventDefault()

        dispatch(register(
            firstName,
            lastName,
            staffID,
            gender,
            phoneNumber,
            department,
            address,
            city,
            state,
            fullName,
            email,
            password,
            kaddress,
            kcity,
            kphone,
            kstate,
            kemail,
            relationship
        ))

    }

    return (
        <FormContainer>
            <h1 className="my-5">Membership Registration</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler} >
                <h4>Personal Details</h4>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='first-name'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter First Name'
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='last-name'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='department'>
                            <Form.Label>Department</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Department'
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='gender'>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Gender'
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='staff id'>
                            <Form.Label>Staff ID</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Staff ID'
                                value={staffID}
                                onChange={(e) => setStaffID(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>


                </Row>
                <hr />
                <h4>Contact Details</h4>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='state'>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter State'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='phone'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Phone Number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                </Row>
                <hr />
                <h3>Next of Kin</h3>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='kemail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter Email'
                                value={kemail}
                                onChange={(e) => setKemail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='address'>
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Address'
                                value={kaddress}
                                onChange={(e) => setKaddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter City'
                                value={kcity}
                                onChange={(e) => setKcity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='state'>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter State'
                                value={kstate}
                                onChange={(e) => setKstate(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='relationship'>
                            <Form.Label>Relationship</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Relationship'
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                    <Col xs={12} md={6} lg={6}>
                        <Form.Group controlId='phone'>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter Phone Number'
                                value={kphone}
                                onChange={(e) => setKphone(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>

                </Row>
                <hr />

                <hr />
                <h3>Security</h3>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='success' className="btn-block">
                    Register
        </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account?{' '}
                    <Link to={'/m/login'}>
                        Login
          </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default MemberRegisterScreen