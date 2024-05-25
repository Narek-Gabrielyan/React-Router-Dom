// **** Installed libraries **** //
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../Tag_Span";

// **** CSS **** //
import prod from "./Product.module.css";

export const Product = ({ albums }) => {
  const { id } = useParams();

  const nav = useNavigate()

  const back = () => nav(-1);

  let product = albums.filter((el) => el.id === (+id && parseInt(id)));

  return product.map((el) => (
    <div className={prod.box} key={"prod" + el}>
      <div>
      <Tag_Span keys={Object.keys(el)[0]} values={Object.values(el)[0]} />
      <span className={prod.click} onClick={back}>Go Back</span>
      </div>
      <div>
      <Tag_Span keys={Object.keys(el)[2]} values={Object.values(el)[2]} />
      <Tag_Span keys={Object.keys(el)[1]} values={Object.values(el)[1]} />
      </div>
    </div>
  ));
};
