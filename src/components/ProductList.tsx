import Item from "../models/Item";
import Product from "./Product";

export const product: Item[] = [
  {
    id: "0",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    discountPrice: 125.0,
    discount: 50,
    originalPrice: 250.0,
  },
];
const ProductList = () => {
  return (
    <div className="ProductList">
      {product.map((element) => {
        return <Product specificProduct={element} />;
      })}
    </div>
  );
};

export default ProductList;
