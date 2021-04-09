import { NavLink } from 'react-router-dom'



const LoggedHeader = () => {

    return (

        <>
            <li>
                <NavLink to="/" exact activeClassName="selected">Archive</NavLink>
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