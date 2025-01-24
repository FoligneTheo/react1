import './App.scss';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Acceuil from './pages/Acceuil';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
