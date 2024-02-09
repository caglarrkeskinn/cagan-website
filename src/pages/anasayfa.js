
import Slider from '../components/slider';
import OneCikan from '../components/oneCikan';


function Home() {


  return (
    <section id="anasayfa"  >
      <div className='background'></div>
      <Slider/>
      <div className='index'>
      <OneCikan/>
      </div>
    </section>
  );
}

export default Home;