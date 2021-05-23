import './App.css';
import {BrowserRouter as Router, Switch, Route, Navbar} from 'react-router-dom';
import socket from './components/Socket';
import { useEffect, useState } from 'react';
import Map from './components/Map';
import Chat from './components/Chat';
import NavbarWeb from './components/Navbar';
import FlightInformation from './components/FlightInformation';
import ControlCenter from './components/ControlCenter'
import { flexbox } from '@material-ui/system';
import { Column, Row } from 'simple-flexbox';

function App() {

  //CREACION ESTADOS
  const [messages, setMessages] = useState([])
  const [flights, setFlights] = useState([])
  const [positions, setPositions] = useState([])
    

  //EMITO LA SEÑALES
  useEffect(()=> {
  socket.emit('CHAT')
  }, []);

  useEffect(()=> {
    socket.emit('FLIGHTS')
  }, []);
    
  //RECIBO COSAS
  useEffect(()=> {
    socket.on('FLIGHTS', flights => {
    setFlights(flights);
    });
  }, []);

  useEffect(()=> {
    socket.on('POSITION', data_positions => {
    setPositions(positions => [ ...positions, data_positions]);
    });
  }, []);
  // console.log(positions)

  useEffect(()=> {
    socket.on('CHAT', data_message => {
    setMessages(messages => [ ...messages, data_message]);
    });
  }, []);
  // console.log(messages)
    

  return (
    <div className="App" style={{backgroundColor: '#000'}}>
      <NavbarWeb/>
      <Map flights={flights} positions={positions}/>
      <Chat messages={messages}/>
      <Row>
        <Column flexGrow={1} horizontal='center'>
            <FlightInformation flights={flights}/>
        </Column >
        <Column flexGrow={1} horizontal='center'>
            <ControlCenter messages={messages}/>
        </Column >
      </Row>
    </div>
  );
}

export default App;

