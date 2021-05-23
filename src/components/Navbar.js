import React from 'react'

import { Navbar} from 'react-bootstrap'

import logo from '../avion_2.png';

function  NavbarWeb() {

    return (
        <div className= "NavbarWeb">
            <Navbar expand="lg" style={{backgroundColor: "#000", height: 100, borderBottomWidth: '50%', borderBottomColor: "#b8944a"}}>
            <Navbar.Brand style={{color: "#b8944a", fontWeight: 'bold', fontSize: 50, fontFamily: 'EK'}}>
            <img
                alt=""
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top"
            /> {'   '}
                   Gigi's Routes
            </Navbar.Brand>
            </Navbar>
        </div>
    )
  }
  
export default NavbarWeb

