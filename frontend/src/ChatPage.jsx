import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="f0af375d-b47d-4f67-bedb-50d1b568d8b5"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
    </div>)
}

export default ChatPage