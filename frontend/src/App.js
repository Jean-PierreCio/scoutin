import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import MyProfile from './pages/MyProfile';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
