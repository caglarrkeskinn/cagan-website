import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Güngör Abi',
    description: 'Mükemmel bir iş ortağı olan Peglad Medya, PVC işimiz için özel bir fiyat hesaplama programı ve web sitesi geliştirdi. Profesyonel yaklaşımları ve teknik becerileri sayesinde, müşterilerimize özelleştirilmiş çözümler sunarak işimizi büyütmeye yardımcı oldular.',
    designation: 'Kurucu'
  },
  {
    id: 2,
    name: 'YASU Mobilya',
    description: 'Mükemmel bir iş ortağı olan şirket, mobilya e-ticaret sitemizi hayata geçirirken bize olağanüstü bir destek sundu. Ürünlerimizin çevrimiçi olarak sergilenmesi, kolay ödeme seçenekleri ve hızlı teslimatları ile müşterilerimize mükemmel bir alışveriş deneyimi yaşattık. Şirketin sağladığı profesyonel yaklaşım ve teknik destek, çevrimiçi varlığımızı güçlendirmemize yardımcı oldu.',
    designation: 'Kurucu'
  },
  {
    id: 3,
    name: 'OMNIA Burger',
    description: "Restoranımızın QR kodlu dijital menüsü, müşterilere sunulan yüksek kaliteli hizmeti artırmak için harika bir yenilik oldu. Peglad Medya'nın etkili çözümleri ve profesyonel yaklaşımları sayesinde, müşterilerimiz menümüze hızlı ve kolay bir şekilde erişebiliyor. QR kodlu menümüz, restoranımızın lüks atmosferindeki lezzetleri keşfetmek isteyen misafirlerimiz için mükemmel bir seçenek haline geldi.",
    designation: 'Yönetici'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="block testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Müşteri Yorumları</h2>
          <div className="subtitle">Müşterilerimizden Bizim Hakkımızda</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;