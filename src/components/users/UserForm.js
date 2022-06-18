import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "../commons/Loader";

const UserForm = () => {

    const { user, isLoadingUserById } = useSelector(state => state.usersReducer);

    return <>
        <Container>
            {isLoadingUserById ? <Loader />
                : (
                    <Form>
                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" value={user.email} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                )}
        </Container>
    </>

}

export default UserForm;