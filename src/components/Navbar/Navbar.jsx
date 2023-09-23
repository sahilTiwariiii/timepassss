import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";
import '../../Styles/main.css'
import { Link } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	const isAuthenticated=false;

	return (
		<header>
			<h3 className="joga">Cyber Scraper</h3>
			<nav ref={navRef}>
				<Link to="/#" className="mylife">Home</Link>
				<Link to="/about" className="mylife">About us</Link>
				
				<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle baba " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Get Involved
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="#">Be a Volunteer</Link>
    <Link className="dropdown-item" to="/store">Donate Us</Link>
  </div>
</li>
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle baba " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Where to Dispose
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="#">Events</Link>
    <Link className="dropdown-item" to="#">Blogs</Link>
  </div>
</li>
{isAuthenticated?(
 <>
 <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle baba " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   My Dashboard
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="#">Points</Link>
    <Link className="dropdown-item" to="#">Edit</Link>
  </div>
</li>
 <Link to="/profile" className="mylife"><FaUserCircle/></Link>
	<Link to="/" className="mylife">Logout</Link>
 </>
    ):(
    <>
	<Link to="/register" className="mylife">Register</Link>
				<Link to="/login" className="mylife">Login</Link>
</>)}


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;