// **** CSS **** //
import prod from "./Product.module.css";

import { useParams } from "react-router-dom";

export const Product = ({ albums }) => {
  const { id } = useParams();

  let product = albums.filter((el) => el.id === +id);

    return product.map((el) => (
      <div className={prod.box}>
        <p>{el.id}</p>
        <p> {el.userId} </p>
        <p>{el.title}</p>
      </div>
    ));
};
