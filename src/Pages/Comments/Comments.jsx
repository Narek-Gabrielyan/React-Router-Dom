// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span";

// **** CSS **** //
import com from "./Comments.module.css";

export default function Comments({ comments }) {
    
  // console.log(Object.keys(comments[0]));
  // comments[0][0] = postId
  // comments[0][1] = id
  // comments[0][2] = name
  // comments[0][3] = email
  // comments[0][4] = body

  return (
    <>
      {comments.map((elem) => (
        <div className={com.element} key={"comments" + elem.id}>
          <div className={com.element_item}>
            <Tag_Span keys={Object.keys(elem)[0]} values={Object.values(elem)[0]} />
            <Tag_Span keys={Object.keys(elem)[1]} values={Object.values(elem)[1]} />
          </div>
          <div className={com.element_item}>
            <Tag_Span keys={Object.keys(elem)[2]} values={Object.values(elem)[2]} />
            <Tag_Span keys={Object.keys(elem)[3]} values={Object.values(elem)[3]} />
          </div>
          <div className={com.title}><Tag_Span keys={Object.keys(elem)[4]} values={Object.values(elem)[4]} /></div>
        </div>
      ))}
    </>
  );
}