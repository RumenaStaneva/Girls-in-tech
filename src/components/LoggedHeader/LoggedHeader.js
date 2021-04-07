import logo from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { app } from '../../services/firebase'
import './LoggedHeader.css'


const LoggedHeader = () => {

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
                        <li>
                            <NavLink to="/" exact activeClassName="selected">Archive</NavLink>
                        </li>
                        <li>
                            <Link onClick={() => app.auth().signOut()}>Logout</Link>
                        </li>


                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default LoggedHeader;