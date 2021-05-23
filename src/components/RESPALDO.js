import React from 'react';
import { useEffect, useState } from 'react';
// import fetch from 'node-fetch';
// import {Link} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, LatLngExpression, Polyline} from 'react-leaflet'
import './Map.css';
import Leaflet from 'leaflet';
import image from '../avion_emirates.png';


const MyIcon = new Leaflet.Icon({
    iconUrl: image,
    iconSize: [50,50],
});

function  Map(props) {
    // console.log(props['flights'][0])
    // console.log(props['positions'][0])

    // const [actual_position, setActualPosition] = useState([])
    const largo = parseInt(props['positions'].length)
    
    if (props !== undefined) {
        if (props['positions'][largo-1]!== undefined){
            var actual_position = props['positions'][largo-1]['position']
        }
    }
    // useEffect(()=> {
    //     if (props !== undefined) {
    //         if (props['positions'][largo]!== undefined){
    //             setActualPosition(props['positions'][largo]['position'][0],props['positions'][largo]['position'][1]);
    //         }
    //     }
    // }, []);

    // console.log(props['positions'][largo - 1]['position'])   
    // console.log(props['positions'][largo - 1]['position'][0])
    // console.log(actual_position)


    return (
        
      <div className="Map">
        
        
        {/* { !props['flights']? 'Cargando...' :
                props['flights'].map((info_flight,id_flight) => {
                    return (
                        <li key={id_flight}>
                           codigo: {info_flight['origin']}     
                           posicion: {info_flight['destination']}  
                        </li>)
            })
        } */}

        {/* { !props['positions']? 'Cargando...' :
                        props['positions'].map((info_position,id_position) => {
                            return (
                                <li key={id_position}>
                                    codigo: {info_position['code']}     
                                    posicion_0: {info_position['position'][0]}  
                                    posicion_1: {info_position['position'][1]}  
                                </li>)
                    })
        } */}
        

        <MapContainer center={[-35,-68]} zoom={6} scrollWheelZoom={false}>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
        />
        { !props['flights']? 'Cargando...' :
                props['flights'].map((info_flight,id_flight) => {
                    return (
                        <div key={id_flight}>
                            <Polyline positions={[
                                [info_flight['origin'][0], info_flight['origin'][1]], [info_flight['destination'][0], info_flight['destination'][1]],
                                ]} color={'#3e7750'} dashOffset={10} dashArray={10}
                            />
                        </div>)
            })
        }
        
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { !props['positions']? 'Cargando...' :
                props['positions'].map((info_position,id_position) => {
                    if(info_position['position'] !== null && info_position['position'] !== '' && info_position['position'] !== undefined){
                        return (
                            <div key={id_position}>
                                {/* {info_position['code']} */}
                                {/* <Marker icon={MyIcon} position={actual_position}>
                                </Marker> */}
                                <Polyline positions={[info_position['position'][0],info_position['position'][1]]} color={'#c42526'} />
                            </div>
                            )
                    }
            })
        }
        <Marker icon={MyIcon} position={actual_position}></Marker>
        
        </MapContainer>

      </div>
    );
  }
  
export default Map