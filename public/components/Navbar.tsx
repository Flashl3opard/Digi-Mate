import { IoMdHome } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { SiRiotgames } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 p-4">
        <div className="w-[12vh] h-[40vh] border-2 border-gray-700 rounded-4xl shadow-lg bg-gray-900 p-4">
          <ul className="flex flex-col items-center justify-center h-full space-y-8 space-x-1 text-white">
            <li className="flex items-center justify-center">
              <IoMdHome
                className="transition-transform duration-300 hover:scale-125 hover:shadow-lg hover:text-blue-600"
                size={28}
              />
            </li>
            <li className="flex items-center justify-center">
              <FaCode
                className="transition-transform duration-300 hover:scale-125 hover:shadow-lg hover:text-yellow-300"
                size={28}
              />
            </li>
            <li className="flex items-center justify-center">
              <SiRiotgames
                className="transition-transform duration-300 hover:scale-125 hover:shadow-lg hover:text-red-600"
                size={28}
              />
            </li>
            <li className="flex items-center justify-center">
              <IoSettingsSharp
                className="transition-transform duration-300 hover:scale-125 hover:shadow-lg hover:text-gray-400"
                size={28}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
