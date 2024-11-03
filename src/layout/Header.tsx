import { Search, Home, Menu, Zap } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname.includes("/home");
  const navigate = useNavigate();
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <div className="text-3xl font-bold text-black" onClick={()=>navigate("/")}>Brilliant</div>
            <div className="flex space-x-4">
              <a href="#/home" className={`flex items-center text-gray-500 border-black px-1 py-4 ${isHome ? "border-b-2":""}`}>
                <Home className="h-4 w-4 mr-1" />
                Home
              </a>
              <a href="#/courses" className={`${!isHome ? "border-b-2":""} text-gray-500 border-black px-1 py-4`}>
                Courses
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="w-64 bg-gray-100 rounded-md pl-10 pr-4 py-2"
                placeholder="Search..."
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="px-4 py-1.5 text-sm border border-green-500 text-green-500 rounded-full">
              Gift premium
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                1
              </div>
              <Zap className="h-5 w-5 text-gray-400" />
            </div>
            <Menu className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};
