import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
// import Main from "../Components/Main";

export default function DefaultLayout() {
  return (
    <div>
      <Home />
      {/* <Outlet /> */}
      {/* <Main /> */}
    </div>
  );
}
