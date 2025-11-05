import Header from "../features/header/Header"
import Sidebar from "../features/sidebar/Sidebar";
// import Chat from "../features/chat/Chat";

const App = () => {
  return (
    <div className="flex h-screen bg-[#0B0B0B]text-white caret-amber-400">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
      </div>

    </div>
  )
}

export default App;