import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/east-wind-connect.png";
import { CustomButton } from "../componenets";

function PageFooter({ menu }) {
  const navigate = useNavigate();

  return (
    <footer className="ew-footer">
      <header>
        <Link to="/">
          <img src={LOGO} alt="east-wind-connect" />
          EAST WIND Connect
        </Link>
      </header>
      <main>
        <div>
          <div className="ew-footer-navigation">
            <span>Navigation</span>
            <ul>
              {menu.map((item) => (
                <Link key={item.link} to={item.link}>
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="ew-footer-contact">
            {/* <span>Contact</span> */}
            <h4>Let’s explore how we can help your business grow.</h4>
            <CustomButton
              label="Contact us"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </main>
      <span>© 2025 EAST WIND Connect. All Rights Reserved.</span>
    </footer>
  );
}

export default PageFooter;
