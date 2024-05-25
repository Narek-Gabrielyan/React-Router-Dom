// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span";

// **** CSS **** //
import post from "./Posts.module.css";

export default function Posts({ posts }) {
    
  // console.log(Object.keys(posts[0]));
  // posts[0][0] = userId
  // posts[0][1] = id
  // posts[0][2] = title
  // posts[0][3] = body

  return (
    <>
      {posts.map((posts) => (
        <div className={post.box} key={"posts" + posts.id}>
          <div className={post.box_item}>
            <Tag_Span
              keys={Object.keys(posts)[2]}
              values={Object.values(posts)[2]}
            />
            <div className={post.box_item_2}>
              <Tag_Span
                keys={Object.keys(posts)[0]}
                values={Object.values(posts)[0]}
              />
              <Tag_Span
                keys={Object.keys(posts)[1]}
                values={Object.values(posts)[1]}
              />
            </div>
          </div>
          <Tag_Span
            keys={Object.keys(posts)[3]}
            values={Object.values(posts)[3]}
          />
        </div>
      ))}
    </>
  );
}
