
import './App.css';
import Login from './Login';
import {  BrowserRouter,Routes, Route } from 'react-router-dom';
import './Login.css';
import Registration from './Registration';
import Femhome from './Femhome';
import FemAuraAIForm from './FemAuraAIForm';
import Report from './Report';
import Reports from './Reports';
import Rep from './Rep';
import About from './About';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
      
        <Route path="/input" element={<FemAuraAIForm />} />
        <Route path="/" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
           <Route path="/home" element={<Femhome/>}/>
         {/* <Route path="/report" element={<Report />} /> */}
          <Route path="/report" element={<Rep />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element ={<About/>}/>
        
      </Routes>
      </BrowserRouter>
     
   
    </div>
  );
}

export default App;
