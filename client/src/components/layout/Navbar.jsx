import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          NewsLens
        </Link>

        <div className="flex gap-6">

          <Link
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/bookmarks"
            className="hover:text-blue-600"
          >
            Bookmarks
          </Link>

          <Link
            to="/history"
            className="hover:text-blue-600"
          >
            History
          </Link>

          <Link
            to="/login"
            className="hover:text-blue-600"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;