import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about.htm" element={<About />} />
          <Route path="/contact.htm" element={<Contact />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
