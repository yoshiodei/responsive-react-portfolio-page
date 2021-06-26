import brand from './../Assets/jd_logo.png';
import './../Assets/css/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
                    <img src={brand} className="navbar__brand" />
                    <div className="navbar__burger">
                        <div className="navbar__burger__inner"></div>
                        <div className="navbar__burger__inner"></div>
                        <div className="navbar__burger__inner"></div>
                    </div>
                <ul className="navbar__list">
                    <li className="navbar__list__item" ><a className="navbar__list__link" href="#">About</a></li>
                    <li className="navbar__list__item" ><a className="navbar__list__link" href="#">Skills</a></li>
                    <li className="navbar__list__item" ><a className="navbar__list__link" href="#">Projects</a>
                    </li>
                    <li className="navbar__list__item" ><a className="navbar__list__link" href="#">Contact</a></li>
                </ul>
        </div>
    );
}

export default Navbar;
