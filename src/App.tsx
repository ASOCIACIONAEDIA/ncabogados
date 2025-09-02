import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import FamilyLaw from './pages/FamilyLaw';
import LaborLaw from './pages/LaborLaw';
import AccidentLaw from './pages/AccidentLaw';
import SoftwareLaw from './pages/SoftwareLaw';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/servicios/derecho-familia" element={<FamilyLaw />} />
            <Route path="/servicios/derecho-laboral" element={<LaborLaw />} />
            <Route path="/servicios/accidentes" element={<AccidentLaw />} />
            <Route path="/servicios/derecho-software" element={<SoftwareLaw />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/preguntas-frecuentes" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;