import { NavLink } from "react-router-dom";

export default () => {
  return (
    <header>
      <hhead className="container">
        <hlinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/List">Lista Post</NavLink>
          <NavLink to="/Who">Chi Siamo</NavLink>
        </hlinks>
      </hhead>
    </header>
  );
};
