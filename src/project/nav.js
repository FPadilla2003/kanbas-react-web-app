import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav nav-tabs mt-2 flex-column text-right norder">
            <Link
                to="/project/home"
                className={`nav-link`}
            >
                Home
            </Link>
            <Link
                to="/project/search"
                className={`nav-link`}
            >
                Search
            </Link>
            <Link
                to="/project/signin"
                className={`nav-link`}
            >
                Signin
            </Link>
            <Link
                to="/project/signup"
                className={`nav-link`}
            >
                Signup
            </Link>
            <Link
                to="/project/account"
                className={`nav-link`}
            >
                Account
            </Link>
        </nav>
    );
}

export default Nav;