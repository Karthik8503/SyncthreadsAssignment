import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Header = () => {
    const navigate = useNavigate()

    const onLogout = () => {
        Cookies.remove('js-cookie');

        navigate("/login", { replace: true });
    }

    return (
        <nav className="navbar">
            <Link className="nav-link">
                <h1 className="dash-head" to="/">Dashboard</h1>
            </Link>
            <button className="logout-btn" type="button" onClick={onLogout}>Logout</button>
        </nav>
    )
}

export default Header;
