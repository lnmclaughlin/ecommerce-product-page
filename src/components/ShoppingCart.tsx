import { useContext } from "react";
import OrderContext from "../context/OrderContext";

const ShoppingCart = () => {
  const { order } = useContext(OrderContext);
  const getTotal = (): number => {
    let total = 0;
    order.forEach((order) => {
      total += order.discountPrice!;
    });
    return total;
  };
  return (
    <div className="ShoppingCart">
      <ul>
        {order.map((orderItem) => (
          <li className="order">
            <p className="order-item">
              {orderItem.name} - ${orderItem.discountPrice!.toFixed(2)}
            </p>
            <p>{getTotal()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
