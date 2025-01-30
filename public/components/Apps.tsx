import { FaGithub } from "react-icons/fa";

const Apps = () => {
  return (
    <>
      <div className="relative -top-[190px]">
        <div className="flex gap-20 justify-center">
          <div className="flex justify-center items-center h-screen ">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center h-[150px] w-[115px] ">
              <img
                src="/images/leet.png"
                className="text-6xl text-white mb-4  ]"
              />
              <h2 className="text-white text-lg">Leetcode</h2>
            </div>
          </div>

          <div className=" relative flex justify-center items-center ">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center h-[150px] w-[115px] hover:scale-110 transition 500">
              <img src="/images/cf.png" className="text-6xl text-white mb-4" />
              <h2 className="text-white text-lg">Codeforces</h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center h-[150px] w-[115px]">
              <FaGithub className="text-6xl text-white mb-4" />
              <h2 className="text-white text-lg">GitHub</h2>
            </div>
          </div>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center h-[150px] w-[115px]">
              <img
                src="/images/leet.png"
                className="text-6xl text-white mb-4"
              />
              <h2 className="text-white text-lg">GitHub</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apps;
