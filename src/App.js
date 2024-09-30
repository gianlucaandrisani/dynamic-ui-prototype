import React, {useState} from 'react';
import ShoppingChat from './components/ShoppingChat';
import Chat from './components/Chat';
import TabNavigation from './components/TabNavigation';

function App() {

  const [selectedChat, setSelectedChat] = useState('superbank')

  return (
    <div className="App">
      <div className='tab-container'>
        <TabNavigation selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
      </div>
      {selectedChat === 'superbank' && <Chat />}
      {selectedChat === 'shopping' && <ShoppingChat />}
    </div>
  );
}

export default App;
