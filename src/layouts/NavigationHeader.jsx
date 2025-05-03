import { Link } from "react-router-dom";
import LOGO from "../assets/east-wind-connect.png";

function NavigationHeader({ menu }) {
  return (
    <header className="ew-navigation-header">
      <Link className="ew-logo" to="/">
        <img src={LOGO} alt="east-wind-connect" />
        <p>EAST WIND</p> <span>Connect</span>
      </Link>
      <ul className="ew-menu">
        {menu.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <span className="ew-language">EN</span>
    </header>
  );
}

export default NavigationHeader;
