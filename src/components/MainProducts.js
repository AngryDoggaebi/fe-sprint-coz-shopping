import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function MainProducts () {

  axios.get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
  .then((result)=>{ console.log(result.data) })
  .catch(()=> { console.log('실패함~') })



  return (
    <Container>
      <Row>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
        <Col sm>sm=true</Col>
      </Row>
    </Container>
  )
}