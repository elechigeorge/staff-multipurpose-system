import React from 'react';
import { Form, Button } from "react-bootstrap";
import FormContainer from '../components/FormContainer';

function UpdateAccountDetails() {
    return (
        <div>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter account number" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter bank name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter account name" />
                </Form.Group>

                <Button variant="success" className="btn-block btn-lg" type="submit">
                    Submit
  </Button>
            </Form>

        </div>
    )
}

export default UpdateAccountDetails;
