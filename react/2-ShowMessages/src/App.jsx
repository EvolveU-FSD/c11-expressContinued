import { useState } from 'react'
import Header from './Header'
import Messages from './Messages'
import SendMessage from './SendMessage'

function App() {
  const [messages, setMessages] = useState([{userName: 'Test', message: "first message"}])

  return (
    <>
      <div style={{backgroundColor: "teal", height: '100vh', width: '100vw'}}>
        <Header />
        <Messages messages={messages}/>
        <SendMessage />
      </div>
    </>
  )
}

export default App
