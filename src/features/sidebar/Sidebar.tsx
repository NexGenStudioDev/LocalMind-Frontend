import ChatHistory from "../../shared/components/ChatHistory"
import LeftSideMenubar from "../../shared/components/LeftSideMenubar"

const Sidebar = () => {
  return (
    <div>
      <ChatHistory />
      <LeftSideMenubar />
    </div>
  )
}

export default Sidebar