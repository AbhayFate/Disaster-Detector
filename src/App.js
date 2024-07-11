import logo from './logo.svg';
import './App.css';
import BasicExample from './components/Layout/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Flood from './components/Flood/Flood';
import Earthquake from './components/Earthquake/Earthquake';
import Storm from './components/Tsunami/Tsunmai';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Layout/Footer';
import Hurricane from './components/Hurricane/Hurricane';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <BasicExample/>
           <Routes>
               <Route index element={<Home/>}/>
               <Route path="/flood" element={<Flood/>} />
               <Route path="/earthquake" element={<Earthquake/>} />
               <Route path="/tsunami" element={<Storm/>} />
               <Route path="/hurricane" element={<Hurricane/>} />
           </Routes>
           <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
