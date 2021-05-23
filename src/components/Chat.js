import React from 'react'
// import fetch from 'node-fetch'
// import {Link} from 'react-router-dom'
import {Widget, addResponseMessage} from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';



function  Chat(props) {

      
  return (
            
    <div className="Chat">
      <Widget title={'Chat Gigi Routes'} subtitle={'Comienza a chatear'} senderPlaceHolder={'Escribe un mensaje aquí'}
      />
    </div>
  );
}
      
export default Chat