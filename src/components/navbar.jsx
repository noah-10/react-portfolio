import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import '../css/navbar.css';

export default function Navbar() {
    // state for screen width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //State for what page it is
    const [currentPage, setCurrentPage] = useState('About Me');

    useEffect(() => {
        const handleResize = () => {
            //Sets the windowWidth to what the screen width is
            setWindowWidth(window.innerWidth);
        };

        // Event listener for resize of screen
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Sets the current page to what page was clicked
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            {/* Different navbar is displayed based on screen size */}
            {windowWidth > 720 ? (
                <nav className="Navbar">
                    <ul className="Navbar-nav">
                        <li className="Nav-item">
                            <Link 
                                className={currentPage === 'About Me' ? "Nav-link Nav-link-active" : 'Nav-link'} 
                                to='/'
                                onClick={() => handlePageChange('About Me')}
                            >
                                About Me
                            </Link>
                        </li>
                        <li className="Nav-item">
                            <Link 
                                className={currentPage === 'Portfolio' ? "Nav-link Nav-link-active" : 'Nav-link'} 
                                to='/portfolio'
                                onClick={() => handlePageChange('Portfolio')}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li className="Nav-item">
                            <Link 
                                className={currentPage === 'Contact' ? "Nav-link Nav-link-active" : 'Nav-link'} 
                                to='/contact'
                                onClick={() => handlePageChange('Contact')}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="Nav-item">
                            <Link 
                                className={currentPage === 'Resume' ? "Nav-link Nav-link-active" : 'Nav-link'} 
                                to='/resume'
                                onClick={() => handlePageChange('Resume')}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
                ) : (
                    <nav className="navbar">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Noah Fryman</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <Link 
                                                className={currentPage === 'About Me' ? "nav-link active .Nav-link-active" : "nav-link active"} 
                                                aria-current="page" 
                                                to='/'
                                                onClick={() => handlePageChange('About Me')}
                                            >   About Me
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className={currentPage === 'Portfolio' ? "nav-link active .Nav-link-active" : "nav-link active"} 
                                                aria-current="page" 
                                                to='/portfolio'
                                                onClick={() => handlePageChange('Portfolio')}
                                            >
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className={currentPage === 'Contact' ? "nav-link active .Nav-link-active" : "nav-link active"} 
                                                aria-current="page" 
                                                to='/contact'
                                                onClick={() => handlePageChange('Contact')}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link 
                                                className={currentPage === 'Resume' ? "nav-link active .Nav-link-active" : "nav-link active"} 
                                                aria-current="page" 
                                                to='/resume'
                                                onClick={() => handlePageChange('Resume')}
                                            >
                                                Resume
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                )
            }
        </>
    )
}