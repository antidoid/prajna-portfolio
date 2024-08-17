import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-[#010101] text-white min-h-screen px-32">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
