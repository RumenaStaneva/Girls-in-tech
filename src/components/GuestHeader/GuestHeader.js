import logo from '../../static/logo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { app } from '../../services/firebase'

import './GuestHeader.css'
import { useContext } from 'react'


const GuestHeader = () => {

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
                            <NavLink to="/login" exact activeClassName="selected">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register" exact activeClassName="selected">Register</NavLink>
                        </li>
                        {/* <li>
                            <button onClick={() => app.auth().signOut()}>Logout</button>
                        </li>*/}


                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default GuestHeader;