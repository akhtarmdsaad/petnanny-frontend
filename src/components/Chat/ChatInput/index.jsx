import React from 'react';
import './index.scss';

const CharInput = () => {
  return (
    <div className='chat-input-parent'>
      <input type='text' placeholder='Type a message...' />

      <button>Send</button>
    </div>
  )
}

export default CharInput