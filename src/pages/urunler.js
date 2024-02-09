import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import worksData from '../components/UrunlerData';



function Urunler() {

  return (
    <section id="urunler" className="block works-block index">
       <div className='background'></div>
      <Container fluid>
        <div className="title-holder">
          <h2>ÜRÜNLERİMİZ</h2>
          <div className="subtitle">İşimiz, her gün daha iyisini yapmak için var gücümüzle çalışmaktır.</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={3} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
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

export default Urunler;