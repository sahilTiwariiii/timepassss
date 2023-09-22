import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";
import '../../Styles/main.css'
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="joga">Cyber Scraper</h3>
			<nav ref={navRef}>
				<Link to="/#" className="mylife">Home</Link>
				<Link to="/#" className="mylife">My work</Link>
				<Link to="/#" className="mylife">Blog</Link>
				<Link to="/about" className="mylife">About us</Link>
				
				<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle baba " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown
  </a>
  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link className="dropdown-item" to="#">Get Involved</Link>
    <Link className="dropdown-item" to="#">Be a Volunteer</Link>
    <Link className="dropdown-item" to="/store">Store</Link>
  </div>
</li>
<Link to="/register" className="mylife">Register</Link>
				<Link to="/login" className="mylife">Login</Link>

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