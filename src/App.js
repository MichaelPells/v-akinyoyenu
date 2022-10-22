import './App.css';

import Home from './pages/Home';
import About from './pages/About';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about.html" element={<About />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
