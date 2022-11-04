import { NavLink } from "react-router-dom";
import "./NavWithNavLinks.scss";

const NavWithNavLinks = () => {

    const activeClassName = ({ isActive }) => {
        if (isActive) {
            return "nav__link nav__link--active";
        } else {
            return "nav__link";
        }
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink className={activeClassName} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={activeClassName} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={activeClassName} to="/contact-us">Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavWithNavLinks;