import Header from "../features/header/Header"
import Sidebar from "../features/sidebar/Sidebar";
// import Chat from "../features/chat/Chat";

const App = () => {
  return (
    <div className="flex h-screen bg-[#0d0d0d]text-white caret-amber-400">
      {/* Sidebar */}

      <Sidebar />

      {/* Main chat section */}
      <div className="flex flex-col flex-1">
        <Header />
        {/* <Chat /> */}
      </div>

    </div>
  )
}

export default App;