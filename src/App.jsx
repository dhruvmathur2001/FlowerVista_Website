import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import About from './components/About';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Login from './components/Login'; // Import Login component

import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Navbar always visible */}
        
        {/* Define your routes here */}
        <Routes>
          {/* Route for home page with rest of the components */}
          <Route
            path="/"
            element={
              <>
                <Background />
                <About />
                <Products />
                <Reviews />
              </>
            }
          />
          
          {/* Route for login page, only shows login component */}
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer /> {/* Footer always visible */}
      </>
    </Router>
  );
}

export default App;
