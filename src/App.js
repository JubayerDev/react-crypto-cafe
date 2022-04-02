import { Route, Routes } from 'react-router-dom';
import './App.css';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import CoinDetail from './components/CoinDetail/CoinDetail';
import BdAddress from './components/Contact/BdAdress';
import UsAddress from './components/Contact/UsAdress';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin-details/:id" element={ <CoinDetail/>}/>
        <Route path="/contact" element={<Contact />} >
          <Route path="bd-address" element={ <BdAddress/>}/>
          <Route path="us-address" element={ <UsAddress/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={ <NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
