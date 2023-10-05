import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Dinning from './Pages/Dinning'; 
import Bed from './Pages/Bed'; 
import { Provider } from 'react-redux';
import store from './Redux/store';
import Faq from './Pages/Faq';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Cart from './Pages/Cart';
import Sofa from './Pages/Sofa';
import Terms from './Pages/Terms';
import Privacy from './Pages/Privacy';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/> 
          <Route path="/terms" element={<Terms />}/> 
          <Route path="/policy" element={<Privacy />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/dinning" element={<Dinning/>} />
          <Route path="/sofa" element={<Sofa/>} />
          <Route path="/bed" element={<Bed/>} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;
