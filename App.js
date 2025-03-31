
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Trial from './components/Trial';
import "bootstrap-icons/font/bootstrap-icons.min.css"





function App() {
  return (
    <Router>
   <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/navbar' element={<NavBar/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/trial' element={<Trial/>}/>
      </Routes>
   </div>
    </Router>
  );
}

export default App;
