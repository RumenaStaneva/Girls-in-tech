import './Footer.css'
import logo from '../../static/logo.png'
import fbLogo from '../../static/facebook.png'
import igLogo from '../../static/instagram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="shell">
                <div className="footer__inner">
                    <div className="footer__logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="footer__links">
                        <div className="footer__nav">
                            <ul>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>

                                <li>
                                    <Link to="/contactUs">Contact Us</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="socials">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <img src={fbLogo} alt="Facebook" />
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/">
                                        <img src={igLogo} alt="Instagram" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2021 Girl in tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;