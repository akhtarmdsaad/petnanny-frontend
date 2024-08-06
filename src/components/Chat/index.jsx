import React from 'react';
import Header from './Header';
import ChatBox from './Chatbox';
import ChatInput from './ChatInput';
// navbar anf footer
import Navbar from '../commons/Navbar';
import Footer from '../commons/Footer';

import './index.scss';

const Chat = () => {
  return (
    <div className='chat-top-parent'>
    <Navbar />
    <div className='chat-parent'>
        
        <Header />
        <ChatBox />
        <ChatInput />
        
    </div>
    <Footer />
    </div>
  )
}

export default Chat;