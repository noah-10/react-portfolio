import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-item" to='/'>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item" to='/portfolio'>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item" to='/contact'>
                        Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item" to='/resume'>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
}