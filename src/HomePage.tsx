import {
  FaCode,
  FaCodeBranch,
  FaClipboardList,
  FaBookOpen,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg p-6 flex space-x-4">
          <div className="flex flex-col items-center">
            <FaCode className="text-4xl text-blue-600" />
            <span className="mt-2">CodeChef</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCodeBranch className="text-4xl text-red-600" />
            <span className="mt-2">Codeforces</span>
          </div>
          <div className="flex flex-col items-center">
            <FaClipboardList className="text-4xl text-green-600" />
            <span className="mt-2">LeetCode</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBookOpen className="text-4xl text-yellow-600" />
            <span className="mt-2">GeeksforGeeks</span>
          </div>
        </div>
      </div>
      <h1 className="text-white">Hello World</h1>
    </>
  );
};

export default HomePage;
