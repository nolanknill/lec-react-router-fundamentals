import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Nav from './components/Nav/Nav';
import NavWithNavLinks from './components/NavWithNavLinks/NavWithNavLinks';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavWithNavLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </>
    
  );
}

export default App;
