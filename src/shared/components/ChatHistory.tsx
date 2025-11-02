import { useState } from "react";

const LeftSideMenubar = () => {
  const [isOpen, setIsOpen] = useState(true); // default = open
  const chatHistory = ["What is C++", "What is Python", "What is JS"];

  return (
    <div className="flex bg-[#0B0B0B] min-h-screen text-white relative overflow-hidden">
      {/* ---------- Sidebar Section ---------- */}
      <div
        className={`bg-black border-r border-gray-800 flex flex-col justify-between fixed top-0 left-0 h-full transition-all duration-300 ease-in-out
        ${isOpen ? "w-[25vw]" : "w-16"}
      `}
      >
        {/* Toggle Button inside sidebar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-[-18px] z-50 bg-[#1a1a1a] p-2 rounded-lg hover:bg-gray-700 transition"
          title={isOpen ? "Close sidebar" : "Open sidebar"}
        >
        </button>

        {/* Top part */}
        <div className={`p-4 ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          <button className="bg-white w-full py-3 text-left rounded-lg text-xl font-semibold text-black">
            MENU
          </button>

          {/* Chat History */}
          <h2 className="mt-6 text-gray-400 mb-2">CHAT HISTORY +</h2>
          <div className="space-y-3">
            {chatHistory.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white px-3 py-2 rounded-md text-black"
              >
                <span>{item}</span>
                <button className="text-gray-400 hover:text-red-500 cursor-pointer">
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom profile part */}
        <div
          className={`flex items-center gap-3 p-4 border-t border-gray-800 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/assets/user.png"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Abhishek Gupta</p>
            <p className="text-gray-400 text-sm">youremail@gmail.com</p>
          </div>
          <button className="ml-auto">⚙️</button>
        </div>
      </div>

      {/* ---------- Main Content Section ---------- */}
      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isOpen ? "ml-[25vw]" : "ml-16"
        }`}
      >
       
      </main>
    </div>
  );
};

export default LeftSideMenubar;
