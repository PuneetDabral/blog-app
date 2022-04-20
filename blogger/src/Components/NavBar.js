import {Link} from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blogger App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link  to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;