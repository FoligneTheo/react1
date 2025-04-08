import './App.scss';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';
import LogementDetails from './components/LogementDetails';


function App() {
  return (
    <Router basename="/react1">
      <div>
        <Header />
        <div class="Middle">
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<CardList />} />
          <Route path="/logements/:id" element={<LogementDetails />} />
        </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
