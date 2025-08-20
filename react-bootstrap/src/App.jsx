import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <>
      <Container fluid>
        <Container>
          <Row>
            <Col className='col-12 text-center py-4'>
              <h1>Our Courses</h1>
            </Col>
          </Row>
          <Row className='g-4'>
            <Col lg="3" md="6" >
              <Card>
                <Card.Img variant="top" src="https://www.vinsys.com/_next/image?url=https%3A%2F%2Fvinsys.com%2Fstatic%2Fmedia%2Fuploads%2F2022%2F01%2FJava-Programming-Training-For-Beginners.jpg&w=3840&q=75" />
                <Card.Body>
                  <Card.Title>Core Java Training</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veritatis voluptas animi corporis atque accusantium 
                    alias necessitatibus, harum iste ea enim.
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card >
                <Card.Img variant="top" src="https://trisectinstitute.co/wp-content/uploads/2021/12/best-data-science-training-institute.png" />
                <Card.Body>
                  <Card.Title>Data Science Training</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veritatis voluptas animi corporis atque accusantium 
                    alias necessitatibus, harum iste ea enim.
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card >
                <Card.Img variant="top" src="https://img-c.udemycdn.com/course/750x422/2314160_8d61_6.jpg" />
                <Card.Body>
                  <Card.Title>Python Training</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veritatis voluptas animi corporis atque accusantium 
                    alias necessitatibus, harum iste ea enim.
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" md="6">
              <Card >
                <Card.Img variant="top" src="https://www.pankajkumarseo.com/wp-content/uploads/2022/06/React-Js-Course-Delhi.png" />
                <Card.Body>
                  <Card.Title>React.js Training</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Veritatis voluptas animi corporis atque accusantium 
                    alias necessitatibus, harum iste ea enim.
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default App
