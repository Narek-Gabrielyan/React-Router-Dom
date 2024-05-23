
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header>
        <NavLink to="/">
          <img src="./Images/home-1-svgrepo-com.png" alt="Home" />
        </NavLink>
        <NavLink to="/albums">Ալբոմներ</NavLink>
        <NavLink to="/comments">Մեկնաբանություններ</NavLink>
        <NavLink to="/photos">Նկարներ</NavLink>
        <NavLink to="/posts">Գրառումներ</NavLink>
        <NavLink to="/todos">To do</NavLink>
      </header>
    );
}