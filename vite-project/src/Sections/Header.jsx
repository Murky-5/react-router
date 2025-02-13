import { NavLink } from "react-router-dom";

export default () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/List">Lista Post</NavLink>
          <NavLink to="/Who">Chi Siamo</NavLink>
        </nav>
      </div>
    </header>
  );
};
