import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-50 text-gray-950 flex items-center justify-between p-5">
      <h2 className="text-2xl font-bold">
        <Link to="/">ForoHub</Link>
      </h2>
      <ul className="flex gap-5 text-xl">
        <li>
          <Link
            to="/topicos"
            className="hover:bg-green-500 hover:text-gray-50 px-4 py-2 transition-colors border border-green-500 rounded"
          >
            Topicos
          </Link>
        </li>
        <li>
          <Link
            to="/crear-topico"
            className="hover:bg-red-500 hover:text-gray-50 px-4 py-2 transition-colors border border-red-500 rounded"
          >
            Crear Topico
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
