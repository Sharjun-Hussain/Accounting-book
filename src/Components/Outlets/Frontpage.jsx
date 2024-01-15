import { Card, Col, Container, Row } from "react-bootstrap";

const Frontpage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4} xs={12} xl={4}>
            <Card>
              <Card.Body>Rs . 10,000</Card.Body>
              <Card.Title>Kaiyiruppu</Card.Title>
            </Card>
          </Col>

          <Col md={4} xs={12} xl={4}>
            <Card>
              <Card.Body>Rs . 10,000</Card.Body>
              <Card.Title>Vangi iruppu</Card.Title>
            </Card>
          </Col>

          <Col md={4} xs={12} xl={4}>
            <Card>
              <Card.Body>Rs . 10,000</Card.Body>
              <Card.Title>Kaiyiruppu</Card.Title>
            </Card>
          </Col>

          <Col md={4} xs={12} xl={4}>
            <Card>
              <Card.Body>Rs . 10,000</Card.Body>
              <Card.Title>Kaiyiruppu</Card.Title>
            </Card>
          </Col>

          <Col md={4} xs={12} xl={4}>
            <Card>
              <Card.Body>Rs . 10,000</Card.Body>
              <Card.Title>Kaiyiruppu</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Transaction />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Frontpage;

// Recent Transcation


const Transaction = () => {
  return <>Hello world</>;
};
