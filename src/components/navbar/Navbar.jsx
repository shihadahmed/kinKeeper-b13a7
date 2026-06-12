import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Clock, BarChart3 } from "lucide-react";
import logoImg from "../../assets/KeenKeeper.svg";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-4 md:py-0 md:h-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        <Link to="/" className="flex items-center select-none cursor-pointer">
          <img
            src={logoImg}
            alt="KeenKeeper Logo"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center justify-center gap-1 w-full md:w-auto overflow-x-auto no-scrollbar">
          <Link
            to="/"
            className={`flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex-1 md:flex-none whitespace-nowrap ${
              isActive("/")
                ? "bg-[#244D3F] text-white shadow-sm"
                : "text-[#475569] hover:bg-gray-50"
            }`}
          >
            <Home size={18} strokeWidth={2} />
            <span>Home</span>
          </Link>

          <Link
            to="/timeline"
            className={`flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex-1 md:flex-none whitespace-nowrap ${
              isActive("/timeline")
                ? "bg-[#244D3F] text-white shadow-sm"
                : "text-[#475569] hover:bg-gray-50"
            }`}
          >
            <Clock size={18} strokeWidth={2} />
            <span>Timeline</span>
          </Link>

          <Link
            to="/stats"
            className={`flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex-1 md:flex-none whitespace-nowrap ${
              isActive("/stats")
                ? "bg-[#244D3F] text-white shadow-sm"
                : "text-[#475569] hover:bg-gray-50"
            }`}
          >
            <BarChart3 size={18} strokeWidth={2} />
            <span>Stats</span>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;