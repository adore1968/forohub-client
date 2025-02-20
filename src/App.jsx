import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-950 text-gray-50 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
