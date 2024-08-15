import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-[#0A0B0A] text-white min-h-screen px-32">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
