import paths from "./paths";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul className="menu">
                <Link to={paths.home}>
                    <li>Home</li>
                </Link>
                <Link to={paths.profile}>
                    <li>Profile</li>
                </Link>
                <Link to={paths.shop}>
                    <li>Shop</li>
                </Link>
                <Link to={paths.faq}>
                    <li>FAQ</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;
