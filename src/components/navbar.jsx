import { Link } from "react-router-dom"
import '../css/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/portfolio'>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/resume'>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}