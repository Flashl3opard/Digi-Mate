import React from "react";

const Leetcode = () => {
  return (
    <>
      <section className="fixed bg-gray-950 w-[85vw] h-[75vh] rounded-3xl translate-x-[9vw] translate-y-[10vh] ">
        <div className="Title w-[84vw] h-13 bg-gray-800 shadow-2xl rounded-2xl mx-auto translate-y-1 flex items-center">
          <img src="/images/leet.png" alt="logo" className="w-7 h-7 m-2" />
          <h1 className="text-white m-1 text-xl">Leetcode</h1>
        </div>
        <div
          className="additional w-75 bg-gray-800 h-115 rounded-2xl mx-[65vw] translate-y-2 text-center"
          style={{ lineHeight: "115px" }}
        >
          <div className="translate-y-3">
            <img src="/images/LC1.png" alt="" className="inline-block m-1 " />
            <img src="/images/LC2.png" alt="" className="inline-block m-1" />
            <img src="/images/LC3.png" alt="" className="inline-block m-1" />
          </div>
        </div>

        <div className="USER w-75 bg-gray-800 h-115 rounded-2xl mx-2 -translate-y-119 text-center">
          <div className="USER w-auto bg-gray-700 h-auto rounded-2xl mx-auto mt-6 p-4 flex items-center shadow-lg">
            {/* Profile Photo */}
            <img
              src="/images/profile.jpg"
              alt="User  Profile"
              className="w-16 h-16 rounded-full border-2 border-white"
            />

            {/* User Details */}
            <div className="ml-4 text-white">
              <h2 className="text-xl font-semibold">Yash Sheorey</h2>
              <p className="text-gray-400 text-sm">Frontend Developer</p>

              {/* Biodata */}
              <div className="mt-2 text-gray-300 text-sm ">
                <p>🚀 Passionate about React & Tailwind</p>
                <p>📍 Location: India </p>
                <p>💼 Working at XYZ Corp</p>
              </div>
            </div>
          </div>
          <div className="USER w-75 bg-gray-700 h-67 rounded-2xl mx-auto mt-6 p-4 shadow-lg">
            <div className="USER w-auto bg-gray-600 h-15 rounded-2xl mx-auto mt-2 p-4 flex items-center justify-between">
              <h1 className="text-green-500 font-bold">Easy</h1>
              <h1 className="text-white font-semibold ml-auto">162/863</h1>
            </div>
            <div className="USER w-auto bg-gray-600 h-15 rounded-2xl mx-auto mt-6 p-4 flex items-center justify-between">
              <h1 className="text-yellow-400 font-bold">Medium</h1>
              <h1 className="text-white font-semibold ml-auto">250/1806</h1>
            </div>
            <div className="USER w-auto bg-gray-600 h-15 rounded-2xl mx-auto mt-6 p-4 flex items-center justify-between">
              <h1 className="text-red-500 font-extrabold">Hard</h1>
              <h1 className="text-white font-semibold ml-auto">40/806</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leetcode;
