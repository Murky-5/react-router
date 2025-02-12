import { Outlet } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Components/Header";
import List from "../Pages/List";
// import Main from "../Components/Main";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* <Main /> */}
    </div>
  );
}
