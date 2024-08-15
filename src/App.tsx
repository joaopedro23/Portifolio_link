import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';
import Experiencia from './pages/Experiencia';
import Educacao from './pages/Educacao';
import Contato from './pages/Contato';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
};

export default App;
