import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
