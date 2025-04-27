import { Link } from "react-router-dom";
import LOGO from "../assets/east-wind-connect.png";

function NavigationHeader({ menu }) {
  return (
    <header className="ew-navigation-header">
      <Link className="ew-logo" to="/">
        <img src={LOGO} alt="east-wind-connect" />
        EAST WIND Connect
      </Link>
      <ul className="ew-menu">
        {menu.map((item) => (
          <Link key={item.link} to={item.link}>
            {item.label}
          </Link>
        ))}
      </ul>
      <span className="ew-language">EN</span>
    </header>
  );
}

export default NavigationHeader;
