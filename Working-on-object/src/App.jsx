import './App.css'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { blog } from './Data/Data'


function App() {
  

  return (
    <>
      <h1 className='text-center my-4'>Blog Data</h1>
      <Container>
        <Row className='g-4'>

          {
            blog.map((data, idx) => {
              return (
                <ProductItems productData={data} key={idx} />
              )
            })
          }
          
        </Row>
      </Container>
    </>
  )
}

export default App

function ProductItems({productData}) {
  return (
    <Col lg="3" md="6">
      <Card>
        <Card.Img variant="top" src={productData.image} />
        <Card.Body>
          <Card.Title>{productData.title}</Card.Title>
          <Card.Text>
            {productData.body}
          </Card.Text>
          <Button variant="primary">Check Details</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
