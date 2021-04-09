import { NavLink } from 'react-router-dom'



const GuestHeader = () => {

    return (


        <>

            <li>
                <NavLink to="/login" exact activeClassName="selected">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" exact activeClassName="selected">Register</NavLink>
            </li>

        </>

    );
}

export default GuestHeader;