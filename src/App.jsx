import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/hero';
import './index.css'
import Blockchain from './pages/blockChain';
import Web3 from './pages/web3';
import Demo from './pages/demo';
import Connect from './pages/connect';



const routes= (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/blockChain' exact element={<Blockchain />} />
      <Route path='/web3' exact element={<Web3 />} />      
      <Route path='/demo' exact element={<Demo />} /> 
      <Route path="/connect" element={<Connect />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div> {routes} </div> ;
    
  
}

export default App