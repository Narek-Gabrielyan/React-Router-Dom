// **** Installed libraries **** //
import { Outlet } from "react-router-dom";

// **** Component **** //
import Header from "./Header";

export default function Loyout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
