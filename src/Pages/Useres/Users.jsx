
// **** Component tag <span> & <h3> **** //
import { Tag_Span } from "../../Components/Tag_Span";

// **** CSS **** //
import us from "./Users.module.css";

export default function Users({ users }) {

  // {console.log(Object.keys(users[0]))}
  // users [0][0] = id
  // users [0][1] = name
  // users [0][2] = username
  // users [0][3] = email
  // users [0][4] = address = {}
  // users [0].address[0] = street
  // users [0].address[1] = suite
  // users [0].address[2] = city
  // users [0].address[3] = zipcode
  // users [0].address[4] = geo = {}
  // users [0].address.geo[0] = lat
  // users [0].address.geo[1] = lng
  // users [0][5] = phone
  // users [0][6] = website
  // users [0][7] = company = {}
  // users [0].company[0] = name
  // users [0].company[1] = catchPhrase
  // users [0].company[2] = bs

  return (
    <>
      {users.map((el) => (
        <div className={us.box} key={"users" + el.id}>
          <div className={us.box_item_1}>
            <Tag_Span keys={Object.keys(el)[1]} values={Object.values(el)[1]} />
            <Tag_Span keys={Object.keys(el)[2]} values={Object.values(el)[2]} />
            <Tag_Span keys={Object.keys(el)[3]} values={Object.values(el)[3]} />
          </div>

          <div className={us.box_item_1}>
            <Tag_Span keys={Object.keys(el)[5]} values={Object.values(el)[5]} />
            <Tag_Span keys={Object.keys(el)[6]} values={Object.values(el)[6]} />
          </div>
          <hr className={us.hr} />
          <div className={us.box_item_1}>
            <h4> {Object.keys(el)[4].toUpperCase()} </h4>
            <Tag_Span
              keys={Object.keys(el.address)[0]}
              values={Object.values(el.address)[0]}
            />
            <Tag_Span
              keys={Object.keys(el.address)[1]}
              values={Object.values(el.address)[1]}
            />
            <Tag_Span
              keys={Object.keys(el.address)[2]}
              values={Object.values(el.address)[2]}
            />
            <Tag_Span
              keys={Object.keys(el.address)[3]}
              values={Object.values(el.address)[3]}
            />
          </div>
          <hr className={us.hr} />
          <div
            className={us.box_item_1}
            style={{ justifyContent: "space-around" }}
          >
            <h4>{Object.keys(el.address).at(-1)}</h4>
            <Tag_Span
              keys={Object.keys(el.address.geo).at()}
              values={Object.values(el.address.geo).at()}
            />
            <Tag_Span
              keys={Object.keys(el.address.geo).at(-1)}
              values={Object.values(el.address.geo).at(-1)}
            />
          </div>
          <hr className={us.hr} />
          <div className={us.box_item_1}>
            <h4> {Object.keys(el).slice(-1)} </h4>
            <Tag_Span
              keys={Object.keys(el.company).at()}
              values={Object.values(el.company).at()}
            />
            <Tag_Span
              keys={Object.keys(el.company).at(1)}
              values={Object.values(el.company).at(1)}
            />
            <Tag_Span
              keys={Object.keys(el.company).at(2)}
              values={Object.values(el.company).at(2)}
            />
          </div>
        </div>
      ))}
    </>
  );
}
