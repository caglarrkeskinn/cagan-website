import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: "Kaliteli Toptan Gıda Tedarikçisi",
    description: 'Çağan Grup, uygun fiyatlarla kaliteli gıda ürünleri için bizimle iletişime geçin!',
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Çağan Grup İle Güvende Kalın',
    description: 'Uygun fiyatlar, kaliteli ürünler, güvenilir ve geniş ürün yelpazemizle ihtiyaçlarınızı karşılamak için buradayız!',
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Farkı Keşfedin',
    description: 'Hemen bizimle iletişime geçin!',
  }
]

function Slider() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default Slider;