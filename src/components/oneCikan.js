import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import urunlerData from './UrunlerData';



const productsData = urunlerData.slice(0, 3);


function OneCikan() {
  return (
    <section id="works" className="block works-block" >
      <Container fluid>
        <div className="title-holder">
          <h2 > ÖNE ÇIKAN ÜRÜNLERİMİZ</h2>
          <div className="subtitle" style={{ color: 'white'}}>İşimiz, her gün daha iyisini yapmak için var gücümüzle çalışmaktır.</div>
        </div>
        <Row className='portfoliolist'>
          {
            productsData.map(products => {
              return (
                <Col sm={4} key={products.id}>
                  <div className='portfolio-wrapper'>
                    
                      <Image src={products.image} />
                      <div className='label text-center'>
                        <h3>{products.title}</h3>
                        <p>{products.subtitle}</p>
                      </div>

                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>  
    </section>
  );
}

export default OneCikan;