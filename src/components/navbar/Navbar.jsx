import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Clock, BarChart3 } from "lucide-react";
import logoImg from "../../assets/KeenKeeper.svg";

const Navbar = () => {
  const location = useLocation();

  // Helper function to check if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className=" tracking-tightflex items-center select-none cursor-pointer select-none">
          <img
            src={logoImg}
            alt="KeenKeeper Logo"
            className="h-8 w-auto object-contain" // Adjust the height (h-8) as needed to fit your navbar
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Home Button / Link */}
          <Link
            to="/"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              isActive("/")
                ? "bg-[#244D3F] text-white shadow-sm"
                : "text-[#475569] hover:bg-gray-50"
            }`}
          >
            <Home size={18} strokeWidth={2} />
            <span>Home</span>
          </Link>

          {/* Timeline Link */}
          <Link
            to="/timeline"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive("/timeline")
                ? "bg-[#244D3F]/10 text-[#244D3F] font-semibold"
                : "text-[#475569] hover:text-[#1E293B] hover:bg-gray-50"
            }`}
          >
            <Clock size={18} strokeWidth={2} />
            <span>Timeline</span>
          </Link>

          {/* Stats Link */}
          <Link
            to="/stats"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isActive("/stats")
                ? "bg-[#244D3F]/10 text-[#244D3F] font-semibold"
                : "text-[#475569] hover:text-[#1E293B] hover:bg-gray-50"
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
