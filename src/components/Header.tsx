import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const { order } = useContext(OrderContext);

  return (
    <div className="Header">
      <h1>sneakers</h1>
      <nav>
        <button>Nav</button>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <img className="avatar" src="/images/image-avatar.png" alt="avatar" />
      </nav>
    </div>
  );
};

export default Header;
