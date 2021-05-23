import React from 'react'
// import fetch from 'node-fetch'
// import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

function  ControlCenter(props) {

  return (
    <div className="ControlCenter">
            <Card border='success' style={{marginTop: '5%', marginLeft: '5%', marginRight: '5%', width: '100%'}}>
                <Card.Header style={{color: "#3e7750", fontWeight: 'bold', fontSize: 30, fontFamily: 'EK'}}>Centro de control</Card.Header>
                <Card.Body >
                    <Card style={{color: "#000", marginTop: '1%', marginBottom: '1%'}}>
                        {props.messages.map((info_message,id_message) => {
                            if(props.messages.length>0){
                                return (
                                    <div key={id_message}>
                                        <Card.Header style={{fontWeight: 'bold'}}>Fecha: {props.messages[id_message]['date']}</Card.Header>
                                        <Card.Body>Usuario: {props.messages[id_message]['name']}</Card.Body>
                                        <Card.Body>Mensaje: {props.messages[id_message]['message']}</Card.Body>
                                    </div>
                                )
                            }})
                        }
                            
                    </Card>
                    
                </Card.Body>
                
            </Card>
        
    </div>
  );
}
      
export default ControlCenter
