import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import './app.css'


// pages
import HomePage from './pages/HomePage';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;