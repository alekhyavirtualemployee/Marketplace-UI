import React from 'react';
//import Routes from './utility/routes'
import { Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard"
import Productlist from './components/Productlist';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/explore" element={<Productlist/>}/>
      </Routes>
    </>
  );
}

export default App;