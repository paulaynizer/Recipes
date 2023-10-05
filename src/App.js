
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ByLetter from './pages/ByLetter/ByLetter';
import ByIngredients from './pages/ByIngredients/ByIngredients';
import Meal from './pages/Meal/Meal';
import Ingredients from './pages/Ingredients/Ingredients';
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
              < Route path="/meal/:id" element={<Meal/>} />
              < Route path="/ingredient/:strIngredient" element={<Ingredients/>} />
              </Routes>
            </div>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
