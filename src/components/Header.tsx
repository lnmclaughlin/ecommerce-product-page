import { useContext } from "react";
import OrderContext from "../context/OrderContext";

const Header = () => {
  const { order } = useContext(OrderContext);

  return (
    <header className="Header">
      <nav className="nav-container">
        <img
          className="navigation"
          src="images/icon-menu.svg"
          alt="navigation-icon"
          onClick={() => {}}
        />
        <img className="logo" src="images/logo.svg" alt="logo" />
        <li className="nav">Collections</li>
        <li className="nav">Men</li>
        <li className="nav">Women</li>
        <li className="nav">About</li>
        <li className="nav">Contact</li>
        <img className="avatar" src="/images/image-avatar.png" alt="avatar" />
      </nav>
    </header>
  );
};

export default Header;
