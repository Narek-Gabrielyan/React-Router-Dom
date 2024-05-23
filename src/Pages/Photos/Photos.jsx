
// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span";

// **** CSS **** //
import img from "./Photos.module.css";

export default function Photos({ photos }) {
  // console.log(Object.keys(photos[0]));
  // photos[0][0] = albumId
  // photos[0][1] = id
  // photos[0][2] = title
  // photos[0][3] = url
  // photos[0][4] = thumbnailUrl

  return (
    <>
      {photos.map((el) => (
        <div className={img.box} key={"photos" + el.id}>
          <div className={img.title}>
            <Tag_Span keys={Object.keys(el)[2]} values={Object.values(el)[2]} />
          </div>
          <div className={img.box_item}>
            <img src={el.thumbnailUrl} alt="Img" />
            <div className={img.box_item_2}>
              <Tag_Span
                keys={Object.keys(el)[0]}
                values={Object.values(el)[0]}
              />
              <br />
              <Tag_Span
                keys={Object.keys(el)[1]}
                values={Object.values(el)[1]}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
