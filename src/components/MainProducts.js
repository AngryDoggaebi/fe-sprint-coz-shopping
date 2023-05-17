import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainProducts ({ products }) {
  

  return (
    
    <Container>
      <Row>
        <Col sm>{ products[0].title }</Col>
        <Col sm>{ products[1].title }</Col>
        <Col sm>{ products[2].brand_name }</Col>
        <Col sm>{ products[3].title }</Col>
      </Row>
    </Container>
  )
}