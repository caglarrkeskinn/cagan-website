import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
const servicesData = [
    {
      id: 1,
      icon: 'fas fa-location-pin',
      title: 'Adana',
      description: 'Her cihazda mükemmel görüntüleme sağlayarak kullanıcı deneyimini artırıyoruz.'
    },
    {
      id: 2,
      icon: 'fas fa-location-pin',
      title: 'Istanbul',
      description: 'Yenilikçi ve özgün tasarımlarla markanızın öne çıkmasını sağlıyoruz.'
    },
    {
      id: 3,
      icon: 'fas fa-location-pin',
      title: 'Ankara',
      description: 'Arama motoru optimizasyonu ile web sitenizin görünürlüğünü artırıyoruz.'
    },
    {
      id: 4,
      icon: 'fas fa-location-pin',
      title: 'Izmir',
      description: 'Yüksek çözünürlüklü ekranlarda net ve kaliteli görseller sunuyoruz.'
    },
    {
      id: 5,
      icon: 'fas fa-location-pin',
      title: 'Mersin',
      description: 'Farklı tarayıcılarda sorunsuz çalışan web siteleri tasarlıyoruz.'
    },
    {
      id: 6,
      icon: 'fas fa-location-pin',
      title: 'Nigde',
      description: 'Sorularınızı yanıtlamak ve size destek olmak için buradayız.'
    }
  ];

  

  const maps = {
    Adana: <iframe title='Adana' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407876.8661040959!2d34.95841997599255!3d36.99695922814999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f38a79c7193%3A0xd61674d8580bea06!2sAdana%2C%20Re%C5%9Fatbey%2C%20Seyhan%2FAdana!5e0!3m2!1str!2str!4v1705520991720!5m2!1str!2str" ></iframe>,
    Istanbul: <iframe title="Istanbul" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3209726624!2d28.68254386944938!3d41.00537023121768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1705521164787!5m2!1str!2str" ></iframe>, 
    Ankara: <iframe title='Ankara' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391775.9809551227!2d32.1389879797529!3d39.90223257590157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1705521130564!5m2!1str!2str" ></iframe>, 
    Izmir: <iframe title='Izmir' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200065.48497204023!2d26.914910215804483!3d38.4178286639086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1705521206289!5m2!1str!2str"></iframe>, 
    Mersin: <iframe title='Mersin' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818840.3352711577!2d33.18895071475391!3d36.70826754212549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8559f383b6385%3A0x8c4b37ef32cd04c4!2sMersin!5e0!3m2!1str!2str!4v1705522246308!5m2!1str!2str" ></iframe>,
    Nigde: <iframe title='Nigde' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50323.05168264987!2d34.63849596935586!3d37.97267797735066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1529e7e65b22ed61%3A0xe646b6c110f0ab6f!2zTmnEn2RlLCBOacSfZGUgTWVya2V6L05pxJ9kZQ!5e0!3m2!1str!2str!4v1705522297886!5m2!1str!2str" ></iframe>
  };
  

function AppServices() {

  const [selectedLocation, setSelectedLocation] = useState(maps.Adana);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    const googleMapSection = document.getElementById('google-map-section');
    if (googleMapSection) {
      googleMapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <><section id="services" className="block services-block index">
      <div className='background'></div>
      <Container fluid>
        <div className="title-holder">
          <h2>Şubelerimiz</h2>
          <div className="subtitle">Tüm Şubelerimiz</div>
        </div>
        <Row className='content'>
          {servicesData.map(services => {
            return (
              <Col sm={4} className='holder' key={services.id} onClick={() => handleLocationClick(services.title)} style={{ cursor: 'pointer', transition: 'background-color 0.3s' }}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>

      </Container>
    </section>
    {selectedLocation && (
        <section id="google-map-section" className="block contact-block  index">
          <div className='google-map '>
          {maps[selectedLocation]}
          </div>
        </section>
      )}
      </>
  );
}

export default AppServices;