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
      <p>{specificProduct.discountPrice!.toFixed()}</p>
      <p>{specificProduct.discount!.toFixed()}</p>
      <p>{specificProduct.originalPrice!.toFixed()}</p>
      <button className="add" onClick={() => addItem(specificProduct)}>
        Add to Cart
      </button>
      {isThisInOrder && (
        <button
          className="remove"
          onClick={() => removeItem(specificProduct.id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default Product;
