import logo from '../../static/logo.png'
import { Link } from 'react-router-dom'
import LoggedHeader from './LoggedHeader'
import GuestHeader from './GuestHeader'
import './Header.css'


const Header = ({ isAuthenticated }) => {

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <nav className="nav">
                    <ul>
                        {isAuthenticated
                            ? <LoggedHeader />
                            : <GuestHeader />}


                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;