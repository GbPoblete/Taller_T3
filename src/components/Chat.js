import React, {Component} from 'react'
// import fetch from 'node-fetch'
// import {Link} from 'react-router-dom'
import {Widget, addResponseMessage} from 'react-chat-widget';
import { useEffect, useState } from 'react';

import 'react-chat-widget/lib/styles.css';



function Chat(props) {

  useEffect(() => { 
    addResponseMessage('¡Bienvenid@ al chat');
  }, []);

  useEffect(() => {
    addResponseMessage('Manda tus consultas y en breve las responderémos');
  }, []);

  useEffect(() => {
    addResponseMessage('No olvides estar atent@al centro de control');
  }, []);

  

  return (
            
    <div className="Chat">
      <Widget title={'Chat del centro de control'} subtitle={'Gigi Routes'} senderPlaceHolder={'Escribe un mensaje aquí'}
      />
    </div>
  );
}
      
export default Chat