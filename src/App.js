import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import LogementDetails from './components/LogementDetails';

function App() {
  return (
    <Router>
        <Header />
      <div className="page-container">

        <main className="Middle">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/about" element={<About />} />
            <Route path="/logements/:id" element={<LogementDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
