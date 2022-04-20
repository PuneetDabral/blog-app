import Navbar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create';
import BlogDetails from './Components/BlogDetails';

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
    <Routes>
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;