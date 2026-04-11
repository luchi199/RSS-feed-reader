import { NavLink, Outlet, useLocation } from "react-router";

export default function PageLayout() {
  const location = useLocation();
  return (
    <div className="w-screen h-screen">
      <header className="flex justify-between align-center border-b-1 border-gray-200 h-2/30">
        <div className="flex justify-evenly items-center gap-6 px-4">
          <h1 className="text-2xl font-semibold">DevFeed</h1>
          <div className="flex gap-3 text-gray-500 text-md">
            <NavLink
              to="/"
              className={
                " px-2 py-1 rounded transition duration-300 ease-in-out " +
                (location.pathname === "/" ? "bg-gray-100 text-gray-800" : "")
              }
            >
              Feed
            </NavLink>
            <NavLink
              to="/digest"
              className={
                " px-2 py-1 rounded transition duration-300 ease-in-out " +
                (location.pathname === "/digest" ? "bg-gray-100 text-gray-800" : "")
              }
            >
              Digest
            </NavLink>
            <NavLink
              to="/discover"
              className={
                " px-2 py-1 rounded transition duration-300 ease-in-out " +
                (location.pathname === "/discover" ? "bg-gray-100 text-gray-800" : "")
              }
            >
              Discover
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
