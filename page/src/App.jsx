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
import RichPicture from './pages/pre-rastreabilidade/RichPicture';
import AppsAvaliados from './pages/pre-rastreabilidade/AppsAvaliados';

// Planejamento
import FerramentasUtilizadas from './pages/planejamento/FerramentasUtilizadas';
import CronogramaPlanejado from './pages/planejamento/CronogramaPlanejado';


// Atas
import AtaDeReuniao2703 from './pages/atas/ata2703';

// Apresentacoes
import Apresentacao1 from './pages/apresentacao/apresentacao1';

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
          <Route path="/2024.1-Firefox/pre-rastreabilidade/rich-picture" element={<RichPicture />} />
          <Route path="/2024.1-Firefox/pre-rastreabilidade/apps-avaliados" element={<AppsAvaliados />} />
          <Route path="/2024.1-Firefox/planejamento/ferramentas-utilizadas" element={<FerramentasUtilizadas />} />
          <Route path="/2024.1-Firefox/planejamento/cronograma-planejado" element={<CronogramaPlanejado />} />
          <Route path="/2024.1-Firefox/atas/ata2703" element={<AtaDeReuniao2703 />} />
          <Route path="2024.1-Firefox/apresentacao/1" element={<Apresentacao1 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;