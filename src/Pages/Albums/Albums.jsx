// **** Installed libraries **** //
import { NavLink } from "react-router-dom";

// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span.jsx";

// **** CSS **** //
import alb from "./Albums.module.css";

export default function Albums({ albums }) {
  // console.log(albums[0]);
  // albums[0][0] = userId
  // albums[0][1] = id
  // albums[0][2] = title

  return (
    <div className={alb.box_style}>
      {albums.map((elm) => (
        <div className={alb.box} key={"albums" + elm.id}>
          <NavLink to={`/albums/${elm.id}`}>
            <div className={alb.box_item}>
              <Tag_Span
                keys={Object.keys(elm)[1]}
                values={Object.values(elm)[1]}
              />
              <Tag_Span
                keys={Object.keys(elm)[0]}
                values={Object.values(elm)[0]}
              />
              <Tag_Span
                keys={Object.keys(elm)[2]}
                values={Object.values(elm)[2]}
              />
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
