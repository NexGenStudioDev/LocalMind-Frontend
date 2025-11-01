import { Trash } from "lucide-react";
const Sidebar = () => {
  return (
    <div className="w-[25vw] bg-black border-r border-gray-800 flex flex-col justify-between">
      <div className="p-4">
        <button className="bg-white w-full py-3 text-left rounded-lg text-xl font-semibold">
          MENU
        </button>

        {/* Chat History */}
        <h2 className="mt-6 text-gray-400 mb-2">CHAT HISTORY +</h2>
        <div className="space-y-3">
          {["What is C++", "What is Python", "What is JS"].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-white px-3 py-2 rounded-md"
            >
              <span>{item}</span>
              <button className="text-gray-400 hover:text-white cursor-pointer"><Trash size={16} strokeWidth={1} /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Profile section */}
      <div className="flex items-center gap-3 p-4 border-t border-gray-800">
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
  );
};

export default Sidebar;
