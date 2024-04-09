import { Link } from "react-router-dom"
import '../css/navbar.css';

export default function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="Navbar-nav">
                <li className="Nav-item">
                    <Link className="Nav-link" to='/'>
                        About Me
                    </Link>
                </li>
                <li className="Nav-item">
                    <Link className="Nav-link" to='/portfolio'>
                        Portfolio
                    </Link>
                </li>
                <li className="Nav-item">
                    <Link className="Nav-link" to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className="Nav-item">
                    <Link className="Nav-link" to='/resume'>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}