// **** CSS **** //
import todo from "./ToDos.module.css";

// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span";

export default function ToDos({ todos }) {
  // console.log(Object.keys(todos[0]))
  // todos[0][0] = userId
  // todos[0][1] = id
  // todos[0][2] = title
  // todos[0][3] = completed

  return (
    <>
      {todos.map((item) => (
        <div className={todo.box} key={"todos" + item.id}>
          <div className={todo.box_item}>
            <Tag_Span
              keys={Object.keys(item)[0]}
              values={Object.values(item)[0]}
            />
              <Tag_Span
                keys={Object.keys(item)[2]}
                values={Object.values(item)[2]}
              />
            <Tag_Span
              keys={Object.keys(item)[1]}
              values={Object.values(item)[1]}
            />
          </div>
        </div>
      ))}
    </>
  );
}
