import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline} from 'react-leaflet'
import './Map.css';
import Leaflet from 'leaflet';
import image from '../avion_emirates.png';


const MyIcon = new Leaflet.Icon({
    iconUrl: image,
    iconSize: [50,50],
});

function  Map(props) {

    // var planes = new Object();
    // var plane = new Object();

    // var largo = parseInt(props['positions'].length);
    // var actual_position;

    // if (props !== undefined) {
    //     if (props['positions'][largo-1]!== undefined){
    //         actual_position = props['positions'][largo-1]['position']
    //     }
    // }

    // for (var vuelo in props.flights) {
    //     planes[vuelo['code']] = {origen: vuelo['origin'], destino: vuelo['destination']}
    //   }
    // console.log(planes)
    
    
    
    


    if (props.flights.length >0 && props.positions.length >0){
        // console.log('vuelos: ',props.flights)
        // console.log('posiciones: ',props.positions)
        // console.log('vuelo: ',props.flights[0]['code'])
        // console.log('posicion: ',props.positions[0]['position'])
    }

    return (
        
      <div className="Map">
          <h2 style={{color: "#b8944a", fontWeight: 'bold', fontSize: 30, fontFamily: 'EK', marginRight: '70%', paddingTop: '2%'}}>Vuelos en ruta</h2>
        <MapContainer center={[-35,-68]} zoom={6} scrollWheelZoom={false}>
        <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossOrigin=""
        />

        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {props.flights.map((info_flight,id_flight) => {
            if(props.flights.length>0 && info_flight){
                return (
                    <div key={id_flight}>
                        <Polyline positions={[
                            [info_flight['origin'][0], info_flight['origin'][1]], [info_flight['destination'][0], info_flight['destination'][1]],]} 
                            color={'#3e7750'} dashOffset={10} dashArray={10}/>
                        {/* <Marker icon={MyIcon} position={[info_flight['origin'][0],info_flight['origin'][1]]}></Marker> */}
                    </div>
                    )
            }})
        }

        {props.positions.map((info_position,id_position) => {
                if(props.positions.length>0 && info_position){
                    return (
                        <div key={id_position}>
                            {/* {console.log(info_position['position'])}
                            <Polyline positions={[
                                [info_position['position'][0],info_position['position'][1]],]} color={'#c42526'} /> */}
                                <Marker icon={MyIcon} position={[info_position['position'][0],info_position['position'][1]]}></Marker>
                        </div>
                    )
                }
            })
        }
        
        </MapContainer>

      </div>
    );
    }
  
export default Map