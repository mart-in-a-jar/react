import paths from "./paths";
import { NavLink } from "react-router-dom";
// NavLink gets "active" class, Link do not

const Header = () => {
    return (
        <nav>
            <ul className="menu">
                <NavLink to={paths.home}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={paths.profile}>
                    <li>Profile</li>
                </NavLink>
                <NavLink to={paths.shop}>
                    <li>Shop</li>
                </NavLink>
                <NavLink to={paths.faq}>
                    <li>FAQ</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Header;
