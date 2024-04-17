import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/footer.css';

// Component containing footer
export default function Footer(){
    return(
        <div className="footer-container">
            <ul className="links">
                <li className="link-item">
                    <a className="link" href="https://github.com/noah-10">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="link-item">
                    <a className="link" href="https://www.linkedin.com/in/noah-fryman-68ab2a256/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li className="link-item">
                    <a className="link" href="https://www.instagram.com/noahh.10/">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    )
}