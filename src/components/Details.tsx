import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Item from "../models/Item";
import Product from "./Product";
import { product } from "./ProductList";

const Details = () => {
  const id: string | undefined = useParams().id;
  const foundDetailItem: Item | undefined = product.find(
    (item) => item.id === id
  );
  return (
    <div className="Details">
      {foundDetailItem ? (
        <>
          <Product specificProduct={foundDetailItem} />
          <p>{foundDetailItem.description}</p>
        </>
      ) : (
        <p>
          Item not found <Link to="/">Go Home</Link>
        </p>
      )}
    </div>
  );
};

export default Details;
