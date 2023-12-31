import { useState, useEffect } from 'react'
import Header from './Header'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { loadData, sendMessageToServer } from './data'

function App() {
  const [messages, setMessages] = useState([])
  const [userName, setUserName] = useState("")

  async function loadMessagesFromTheServer(){
    const messages = await loadData()
    setMessages(messages)
  }

  useEffect(function(){
    loadMessagesFromTheServer()
  }, [])

  return (
    <>
      <div style={{backgroundColor: "teal", height: '100vh', width: '100vw'}}>
        <Header userName={userName} setUserName={setUserName} reloadMessages={loadMessagesFromTheServer} />
        <Messages messages={messages}/>
        <SendMessage />
      </div>
    </>
  )
}

export default App
