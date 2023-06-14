import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Components/homepage";
import Loginpage from "./Components/Loginpage";
import Searchbooks from "./Components/searchbooks";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/searchbooks" element={<Searchbooks />} />
      </Routes>
    </Router>
  );
}

export default App;
