import Navbar from "./navbar"
import '../css/header.css'

// component for containing the header
export default function Header() {
    return (
        <div className="header-container">
            <div className="header-name">
                <h1>Noah Fryman</h1>
            </div>
            <Navbar />
        </div>
    )
}