
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import Loader from "../Loader";

const UserList = () => {
    const { users, isLoadingUsers } = useSelector((state) => state.usersReducer)

    return <>
        <Container>
            {isLoadingUsers ? <Loader />
                : (
                    users.map((item) => {
                        return (
                            <Row >
                                <Col lg={8} md={10} sm={12}>
                                    <Link to={`/${item.id}`}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>{item.email}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            </Row>
                        );
                    })
                )}
        </Container>
    </>
};

export default UserList; 