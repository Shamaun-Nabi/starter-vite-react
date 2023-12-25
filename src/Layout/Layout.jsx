import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
