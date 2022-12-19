import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import Item from "../models/Item";

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
      />
      <h3>SNEAKER COMPANY</h3>
      <h2>{specificProduct.name}</h2>
      <p>{specificProduct.description}</p>
      <p className="discounted-price">
        ${specificProduct.discountPrice!.toFixed(2)}
      </p>
      <p className="discount">{specificProduct.discount!}%</p>
      <p className="original-priceS">
        ${specificProduct.originalPrice!.toFixed(2)}
      </p>
      <div>TODO Quantity</div>
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
