import React from 'react'
// import fetch from 'node-fetch'
// import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'


function  FlightInformation(props) {

  return (
    <div className="FlightInformation">
        <Card border='success' style={{marginTop: '5%', marginLeft: '5%', marginRight: '10%'}}>
            <Card.Header style={{color: "#3e7750", fontWeight: 'bold', fontSize: 30, fontFamily: 'EK'}}>Información de vuelos</Card.Header>
            <Card.Body>
                <Card>
                    {props.flights.map((info_flight,id_flight) => {
                        if(props.flights.length>0){
                            return (
                                <div key={id_flight}>
                                    <Card.Header>Vuelo: {props.flights[id_flight]['code']}</Card.Header>
                                    <Card.Body>Aerolínea: {props.flights[id_flight]['airline']}</Card.Body>
                                    <Card.Body>Avión: {props.flights[id_flight]['plane']}</Card.Body>
                                    <Card.Body>Asientos: {props.flights[id_flight]['seats']}</Card.Body>
                                    <Card.Title>Pasajeros</Card.Title>
                                    {props.flights[id_flight]['passengers'].map((passenger,id) => {
                                        return (
                                            <div key={id}>
                                                 <Card.Body>Nombre: {passenger['name']} Edad: {passenger['age']}</Card.Body>
                                            </div>
                                            )
                                        })
                                    }
                                   
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
      
export default FlightInformation



