import paths from "./paths";

const Header = () => {
    return (
        <header>
            <ul className="menu">
                <a href={paths.home}>
                    <li>Home</li>
                </a>
                <a href={paths.profile}>
                    <li>Profile</li>
                </a>
                <a href={paths.faq}>
                    <li>FAQ</li>
                </a>
            </ul>
        </header>
    );
};

export default Header;
