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
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="socials">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/girlsintechbg" target="_blank">
                                        <img src={fbLogo} alt="Facebook" />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/girlsintechbg/" target="_blank">
                                        <img src={igLogo} alt="Instagram" />
                                    </a>
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