import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import './app.css'


// pages
import HomePage from './pages/HomePage';
// pre-rastreabilidade
import AppEscolhido from './pages/pre-rastreabilidade/AppEscolhido';
import Heatmap from './pages/pre-rastreabilidade/Heatmap';
import TermoDeUso from './pages/pre-rastreabilidade/TermosDeUso';
import Licenca from './pages/pre-rastreabilidade/Licenca';

// Planejamento
import FerramentasUtilizadas from './pages/planejamento/FerramentasUtilizadas';


import NotFound from './pages/NotFound';
import Capa from './pages/Capa';

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {setUser(storedUser);}
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/2024.1-Firefox/" element={<Capa />} />
          <Route path="/2024.1-Firefox/inicio" element={<HomePage />} />
          <Route path= "/2024.1-Firefox/pre-rastreabilidade/app-escolhido" element={<AppEscolhido/>} />
          <Route path="/2024.1-Firefox/pre-rastreabilidade/heatmap-de-disponibilidade" element={<Heatmap />} />
          <Route path="/2024.1-Firefox/pre-rastreabilidade/termo-de-uso" element={<TermoDeUso />} />
          <Route path="/2024.1-Firefox/pre-rastreabilidade/licenca" element={<Licenca />} />
          <Route path="/2024.1-Firefox/planejamento/ferramentas-utilizadas" element={<FerramentasUtilizadas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;