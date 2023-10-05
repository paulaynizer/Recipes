
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ByLetter from './pages/ByLetter/ByLetter';
import ByIngredients from './pages/ByIngredients/ByIngredients';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <Navbar/>
            <div className="container">
              <Routes>
              < Route path="/" element={<Home />} />
              < Route path="/byLetter" element={<ByLetter/>} />
              < Route path="/byIngredient" element={<ByIngredients/>} />
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
