
const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-800 px-6 py-3 bg-[#111] w-[75vw]">
      <div>
        <span className="text-gray-400">Provider :-</span>{" "}
        <select className="bg-white border-gray-600 px-2 py-1 rounded-md">
          <option>Choose Your Model Provider</option>
          <option>Google</option>
          <option>OpenAI</option>
          <option>LocalMind</option>
        </select>
      </div>

      <div>
        <span className="text-gray-400">Model :-</span>{" "}
        <select className="bg-white border-gray-600 px-2 py-1 rounded-md">
          <option>Select Your AI Model</option>
          <option>GPT-4</option>
          <option>Claude</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
