import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Alert } from "./components/Alert";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert message = "This is an amazing alert in React"/>
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
