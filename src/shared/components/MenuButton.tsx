
const MenuButton = () => {
    const providers = ["Google", "OpenAI", "LocalMind"];
      const models = ["GPT-4", "Claude", "Gemini", "Mistral"]; // <-- dynamic models array

  return (
    <div className="flex justify-between items-center border-b border-gray-800 px-6 py-3 bg-[#0B0B0B] w-[75vw] text-shadow-white">
        {/* Provider Dropdown */}
        <div>
            <span className="text-white">Provider :- </span>
            <select className="bg-[#0B0B0B] border border-gray-600 px-2 py-1 rounded-md">
                <option>Choose Your Model Provider</option>
                {providers.map((provider, index)=>(
                  <option key={index}>{provider}</option>  
                ))}
            </select>
        </div>

        {/* Model Dropdown */}
        <div>
            <span className="text-white">Model :- </span>
            <select className="bg-[#0B0B0B] border border-gray-600 px-2 py-1 rounded-md">
                <option>Select Your AI Model</option>
                {models.map((model, index)=>(
                    <option key={index}>{model}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default MenuButton