import { NavLink, Outlet } from "react-router-dom";

const RootsLayOut = () => {
  return (
    <div className="roots-layout">
      <header>
        <nav>
          <h1>JobaRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootsLayOut;
