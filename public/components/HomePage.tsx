import {
  FaCode,
  FaCodeBranch,
  FaClipboardList,
  FaBookOpen,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen relative -top-[25vh] left-[50vh]">
        <div className="bg-none border-none border-2 bg-opacity-100 backdrop-blur-3xl shadow-2xl rounded-3xl p-6 flex flex-col items-center min-w-[280px] min-h-[270px]">
          <div className="flex space-x-6 mb-6">
            <div className="flex flex-col items-center">
              <FaCode className="text-5xl text-blue-600 hover:scale-130 transition duration-300" />
              <span className="mt-2 text-lg text-white">CodeChef</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCodeBranch className="text-5xl text-red-600 hover:scale-130 transition duration-300" />
              <span className="mt-2 text-lg text-white">Codeforces</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-5xl text-green-600 hover:scale-130 transition duration-300" />
              <span className="mt-2 text-lg text-white">LeetCode</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBookOpen className="text-5xl text-yellow-600 hover:scale-130 transition duration-300" />
              <span className="mt-2 text-lg text-white">GeeksforGeeks</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
