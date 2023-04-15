
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/home'
import Footer from './Components/footer';
import Movies from './Components/movies'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Addmovies from './Components/Addmovies.jsx'
import PageNotfound from './Components/404';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route element={<Home/>} path='/'   />
        <Route element={<Movies/>} path='/movies'   />
        <Route element={<Addmovies/>} path='/addmovies'   />
        <Route element={<PageNotfound/>} path="*" />
      </Routes>
       <Footer/>
       </BrowserRouter>
      
    </div>
  );
}

export default App;
