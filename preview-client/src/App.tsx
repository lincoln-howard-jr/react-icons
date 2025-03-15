import { PenIcon, ChatBubbles, SettingsIcon, UserIcon, CancelIcon } from 'react-icons'
import { BookIcon } from '../../icons/book'
import './App.css'

// should preview the icons
function App() {
  return (
    <>
      <div>
        <h1>Icons</h1>
        <div>
          <PenIcon />
        </div>
        <div>
          <ChatBubbles />
        </div>
        <div>
          <SettingsIcon />
        </div>
        <div>
          <UserIcon />
        </div>
        <div>
          <CancelIcon />
        </div>
        <div>
          <BookIcon />
        </div>
      </div>
    </>
  )
}

export default App
