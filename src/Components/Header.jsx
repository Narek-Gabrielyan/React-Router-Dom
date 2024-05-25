// **** Installed libraries **** //
import { NavLink } from "react-router-dom";

// **** Relative Data Base **** //
import { arrNav } from "../Relative Data Base/Navigate_Link";

export default function Header() {
  return (
    <header>
      {arrNav.map((el) => (
        <NavLink to={el.link} title={el.alt} key={"nav" + el.id}>
          <img src={el.img} alt={el.alt} />
        </NavLink>
      ))}
    </header>
  );
}