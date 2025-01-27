import { IoMdHome } from "react-icons/io";
import { SiRiotgames } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { LuWallpaper } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4 ">
        <div className="w-[10vh] h-[50vh] border-2 border-gray-700 rounded-4xl shadow-lg backdrop-blur-md p-4 ">
          <ul className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <li className="flex items-center justify-center">
              <IoMdHome
                className="transition-transform duration-300 hover:scale-125 hover: hover:text-blue-500"
                size={30} // Increased size for uniformity
              />
            </li>
            <li className="flex items-center justify-center">
              <SiLeetcode
                className="transition-transform duration-300 hover:scale-125 hover: hover:text-yellow-200"
                size={30} // Increased size for uniformity
              />
            </li>
            <li className="flex items-center justify-center">
              <SiRiotgames
                className="transition-transform duration-300 hover:scale-125 hover: hover:text-red-600"
                size={30} // Increased size for uniformity
              />
            </li>
            <li className="flex items-center justify-center">
              <LuWallpaper
                className="transition-transform duration-300 hover:scale-125 hover: hover:text-purple-500"
                size={30} // Increased size for uniformity
              />
            </li>
            <li className="flex items-center justify-center">
              <IoSettingsSharp
                className="transition-transform duration-300 hover:scale-125 hover: hover:text-gray-800"
                size={30} // Increased size for uniformity
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
