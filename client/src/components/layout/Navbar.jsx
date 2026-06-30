import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          NewsLens
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className="hover:text-blue-600 transition-colors"
          >
            Home
          </NavLink>

          <NavLink
            to="/bookmarks"
            className="hover:text-blue-600 transition-colors"
          >
            Bookmarks
          </NavLink>

          <NavLink
            to="/history"
            className="hover:text-blue-600 transition-colors"
          >
            History
          </NavLink>

          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;