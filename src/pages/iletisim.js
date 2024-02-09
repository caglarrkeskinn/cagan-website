import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <><section id="iletisim" className="block contact-block index">
      <div className='background'></div>

      <Container fluid>
        <div className="title-holder">
          <h2>İletişim</h2>
          <div className="subtitle">Bizimle İletişime Geçin</div>
        </div>
        <Row>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control className='form-control' type="text" placeholder="İsim" required />
            </Col>
            <Col sm={4}>
              <Form.Control className='form-control' type="email" placeholder="E-mail" required />
            </Col>
            <Col sm={4}>
              <Form.Control className='form-control' type="tel" placeholder="Telefon" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control className='form-control' as="textarea" placeholder="Mesajınız" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Gönder</Button>
          </div>
        </Form>
        </Row>
      </Container>

      

    </section>
    
      <section id="google-map-section" className="block contact-block  index">
      <div className='google-map'>
        <iframe title='ÇAĞAN' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12749.321400937453!2d35.3025135!3d36.9780471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152885fde308724d%3A0x7feff2b27c2189f8!2zw4dBxJ5BTiBHSURBIFRPUFRBTiBLQURSxLAgw4dBxJ5BTg!5e0!3m2!1str!2str!4v1702167761081!5m2!1str!2str"></iframe>

      </div>
      </section></>
    
  );
}

export default AppContact;