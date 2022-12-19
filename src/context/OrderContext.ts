import { createContext } from "react";
import Item from "../models/Item";

interface OrderContextModel {
  order: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}

const defaultValues: OrderContextModel = {
  order: [],
  addItem: () => {},
  removeItem: () => {},
};

const OrderContext = createContext(defaultValues);

export default OrderContext;
