import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ProgressBar from 'react-bootstrap/ProgressBar';

class BlogPage extends Component {
  state = {};
  render() {
    return (
      <div className="blog_div ">
        <Container>
          <Row>
            <Col sm >
              <Card className="card" style={{ width: "25rem" }}>
                <Card.Img variant="top" src={require("../assets/img1.jpg")} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={require("../assets/img1.jpg")} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={require("../assets/img1.jpg")} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="outline-dark">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="prog-bar">
            {/* <ProgressBar striped variant="success" animated now={45} /> */}
        </div>
      </div>
   
    );
  }
}

export default BlogPage;


