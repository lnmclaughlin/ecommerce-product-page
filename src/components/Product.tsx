import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import Item from "../models/Item";
import Lightbox from "./Lightbox";

export interface Props {
  specificProduct: Item;
}

const Product = ({ specificProduct }: Props) => {
  const { addItem, removeItem, order } = useContext(OrderContext);
  const isThisInOrder: boolean = order.some(
    (item) => item.id === specificProduct.id
  );
  return (
    <div className="specific-product-page">
      <img
        className="product-image"
        src="/images/image-product-1.jpg"
        alt="sneakers"
      >
        {specificProduct.image}
      </img>

      <h3>SNEAKER COMPANY</h3>
      <h2>{specificProduct.name}</h2>
      <p>{specificProduct.description}</p>
      <div className="price-container">
        <p className="discounted-price">
          ${specificProduct.discountPrice!.toFixed(2)}
        </p>
        <p className="discount">{specificProduct.discount!}%</p>
        <p className="original-price">
          ${specificProduct.originalPrice!.toFixed(2)}
        </p>
      </div>

      <div className="counter-container">
        <img
          className="plus"
          src="/images/icon-plus.svg"
          alt="add"
          onClick={() => {}}
        ></img>
        <span className="counter">0</span>
        <img
          className="minus"
          src="/images/icon-minus.svg"
          alt="remove"
          onClick={() => {}}
        ></img>
      </div>
      <button className="add" onClick={() => addItem(specificProduct)}>
        Add to Cart
      </button>
      {isThisInOrder && (
        <img
          src="images/icon-delete.svg"
          alt="remove"
          className="remove"
          onClick={() => removeItem(specificProduct.id)}
        ></img>
      )}
    </div>
  );
};

export default Product;
