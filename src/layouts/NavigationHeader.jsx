import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/east-wind-connect.png";
import { Drawer } from "antd";
import { useState } from "react";
import { Menu } from "lucide-react";
import { CustomButton } from "../componenets";

function NavigationHeader({ menu }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="ew-navigation-header">
      <Link className="ew-logo" to="/">
        <img src={LOGO} alt="east-wind-connect" />
        <p>
          EAST WIND <span>Connect</span>
        </p>
      </Link>
      <ul className="ew-menu">
        {menu.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <span className="ew-menu-trigger" onClick={showDrawer}>
        <Menu />
      </span>
      <Drawer
        className="ew-menu-drawer"
        title={
          <Link className="ew-logo" to="/" onClick={onClose}>
            <img src={LOGO} alt="east-wind-connect" />
            <p>
              EAST WIND <span>Connect</span>
            </p>
          </Link>
        }
        onClose={onClose}
        open={open}
      >
        <ul className="ew-menu">
          {menu.map((item) => (
            <li key={item.link}>
              <Link to={item.link} onClick={onClose}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ew-footer-contact">
          <h4 style={{ marginBottom: 32, fontSize: 40, fontWeight: 300 }}>
            Let’s explore how we can help your business grow.
          </h4>
          <CustomButton
            label="Contact us"
            onClick={() => {
              navigate("/contact");
              onClose();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
        <span>© 2025 EAST WIND Connect. All Rights Reserved.</span>
      </Drawer>
      <span className="ew-language">EN</span>
    </header>
  );
}

export default NavigationHeader;
