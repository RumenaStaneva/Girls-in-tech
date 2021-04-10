import { NavLink } from 'react-router-dom'



const LoggedHeader = () => {

    return (

        <>
            <li>
                <NavLink to="/" exact activeClassName="selected">Archive</NavLink>
            </li>
            <li>
                <NavLink to="/about" exact activeClassName="selected">About</NavLink>
            </li>
            <li>
                <NavLink to="/contactUs" exact activeClassName="selected">Contact Us</NavLink>
            </li>
            <li>
                <NavLink to="/events" exact activeClassName="selected">Events</NavLink>
            </li>
            <li>
                <NavLink to="/profile" exact activeClassName="selected">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/logout" >Logout</NavLink>
            </li>


        </>

    );
}

export default LoggedHeader;