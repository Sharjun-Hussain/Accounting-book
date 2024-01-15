import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProfilePage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Profile Page</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Welcome, 
              </Card.Subtitle>
              <Card.Text>Email: </Card.Text>
              <Card.Text>Location: </Card.Text>
              {/* Add more profile information as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
