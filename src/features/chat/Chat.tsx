// import { useState } from "react";

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { sender: "user", text: "Lorem ipsum something something." },
//     { sender: "bot", text: "Lorem ipsum something something." },
//   ]);
//   const [input, setInput] = useState("");

//   const sendMessage = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: "user", text: input }]);
//     setInput("");
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "Local-Mind is Thinking..." },
//       ]);
//     }, 1000);
//   };

//   return (
//     <div className="flex flex-col flex-1">
//       {/* Chat Messages */}
//       <div className="flex-1 p-6 overflow-y-auto space-y-6">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${
//               msg.sender === "user" ? "justify-end" : "justify-start"
//             }`}
//           >
//             <div
//               className={`max-w-[60%] px-4 py-3 rounded-2xl ${
//                 msg.sender === "user"
//                   ? "bg-[#1a1a1a] text-white"
//                   : "bg-[#111] text-gray-300"
//               }`}
//             >
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Input */}
//       <div className="border-t border-gray-800 px-6 py-3 flex items-center gap-3">
//         <button className="text-gray-400">➕</button>
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask me anything anytime, what's in your mind...!"
//           className="flex-1 bg-transparent outline-none text-gray-200"
//         />
//         <button onClick={sendMessage} className="text-gray-400 hover:text-white">
//           📩
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Chat;
