import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {
  return (
    <div>
    <BrowserRouter>
     <NavBar/>
      
      <Routes>
          <Route exact path="/" element={  <Home />}/>
          <Route exact path="/about" element={  <About />}/>
      </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
