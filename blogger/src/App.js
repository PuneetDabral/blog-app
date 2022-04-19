import Navbar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
    <Routes>
    <Route path="/"  element= { <Home /> } />
    </Routes>
      </div>
      <Routes>
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}




export default App;