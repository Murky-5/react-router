import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
// import Main from "../Components/Main";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Main />
    </div>
  );
}
