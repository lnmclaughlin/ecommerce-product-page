import { ReactNode, useState } from "react";
import Item from "../models/Item";
import OrderContext from "./OrderContext";

interface Props {
  children: ReactNode;
}

const OrderContextProvider = ({ children }: Props) => {
  const [order, setOrder] = useState<Item[]>([]);
  // let total = 0;

  const addItem = (item: Item): void => {
    setOrder((prev) => [...prev, item]);
    // total += item.price;
  };

  const removeItem = (id: string): void => {
    setOrder((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <OrderContext.Provider value={{ order, addItem, removeItem }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
