import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppServices from './pages/subeler';
import AppContact from './pages/iletisim';
import AppFooter from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/anasayfa';
import Kurumsal from './pages/kurumsal';
import Urunler from './pages/urunler';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anasayfa" element={<Home />} />
          <Route path="/kurumsal" element={<Kurumsal />} />
          <Route path="/subelerimiz" element={<AppServices />} />
          <Route path="/urunler" element={<Urunler />} />
          <Route path="/iletisim" element={<AppContact />} />
        </Routes>
        </BrowserRouter>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;